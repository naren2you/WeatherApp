import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { LocationService } from '../../../services/location/location.service';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../../../models/location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  fb = inject(FormBuilder);
  locService = inject(LocationService);
  http = inject(HttpClient);

  locationData!: WeatherData;
  weatherMetrics: any[] = [];
  showErro: boolean = false;
  showErrorMessage: string = '';

  // Oninit life cycle
  ngOnInit(): void {}

  getWeatherForm = this.fb.group({
    lang: ['English'],
    name: [''],
    q: ['', Validators.required],
  });

  getInfo() {
    this.locService
      .getWeatherByLocationName(this.getWeatherForm.getRawValue())
      .subscribe((x) => {
        if (x) {
          console.log(x);
        }
        this.locationData = x;
        console.log(this.locationData);
        this.weatherMetrics = [];

        if (this.locationData) {
          this.weatherMetrics.push(
            {
              label: 'Feels Like',
              value: `${this.locationData.current.feelslike_c}°C`,
              icon: 'bi-thermometer-half',
            },
            {
              label: 'Wind',
              value: `${this.locationData.current.wind_kph} km/h ${this.locationData.current.wind_dir}`,
              icon: 'bi-wind',
            },
            {
              label: 'Humidity',
              value: `${this.locationData.current.humidity}%`,
              icon: 'bi-droplet-half',
            },
            {
              label: 'Visibility',
              value: `${this.locationData.current.vis_km} km`,
              icon: 'bi-eye',
            },
            {
              label: 'UV Index',
              value: this.locationData.current.uv.toString(),
              icon: 'bi-sun',
            },
            {
              label: 'Condition',
              value: this.locationData.current.condition.text,
              icon: 'bi-cloud',
            }
          );
        } else {
          this.showErro = true;
          this.showErrorMessage = 'We dont have data for this.. Location';
        }
      });
  }
}
