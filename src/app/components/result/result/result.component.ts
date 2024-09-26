import { Component } from '@angular/core';
import { HomeComponent } from "../../home/home/home.component";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

}
