import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CovidData } from './covid/covid.data';
import { CovidDataDisplayComponent } from './covid/covid-data-display/covid-data-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CovidDataDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-corona';
  covidData: CovidData[] = [];
  showTruth: boolean = false;

  ngOnInit(): void {
    this.covidData = this.generateCovidData(6);
  }

  generateCovidData(days: number): CovidData[] {
    const covidData: CovidData[] = [];

    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      const tests = Math.floor(Math.random() * 10000) + 1000;
      const newCases = Math.floor(Math.min(Math.random() * 500, tests * 0.05));
      const inHospital = Math.floor(Math.random() * 500) + 50;
      covidData.push({
        date,
        numberOfTests: tests,
        newCases,
        numberOfPersonsInHospital: inHospital,
      });
    }
    return covidData;
  }
}
