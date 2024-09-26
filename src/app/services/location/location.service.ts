import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../../models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  key: string = '304e302fc7584b92ad8161509242309';

  constructor(private http: HttpClient) {}

  getWeatherByLocationName(paramas: any): Observable<WeatherData> {
    let params = { key: this.key, ...paramas };
    return this.http.get<WeatherData>(
      'https://api.weatherapi.com/v1/current.json',
      {
        params,
      }
    );
  }
}
