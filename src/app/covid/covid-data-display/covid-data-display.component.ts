import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CovidData } from '../covid.data';
import { DatePipe } from '@angular/common';
import { DisplayCovidDataPipe } from './covid-data-pipe';
import { CovidDataFormatDirective } from './covid-data-format.directive';

@Component({
  selector: 'app-covid-data-display',
  standalone: true,
  imports: [DatePipe, DisplayCovidDataPipe, CovidDataFormatDirective],
  templateUrl: './covid-data-display.component.html',
  styleUrl: './covid-data-display.component.scss',
})
export class CovidDataDisplayComponent {
  @Input() covidStat: CovidData[] = [];

  @Input() showTruth: boolean = false;
  @Output() showTruthChange = new EventEmitter<boolean>();

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.altKey && event.code === 'KeyT') {
      this.showTruth = !this.showTruth;
      this.showTruthChange.emit(this.showTruth);
    }
  }
}
