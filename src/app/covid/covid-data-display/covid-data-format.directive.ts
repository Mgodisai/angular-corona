import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CovidData } from '../covid.data';
import { JsonPipe, PercentPipe } from '@angular/common';

@Directive({
  selector: '[appCovidDataFormat]',
  standalone: true,
  providers: [PercentPipe, JsonPipe],
})
export class CovidDataFormatDirective {
  private _covidData?: CovidData;
  private _showTruth = false;
  private readonly _positiveTestThreshold = 0.025;

  @Input('appCovidDataFormat') set covidData(covidData: CovidData) {
    this._covidData = covidData;
    this.formatData();
  }
  @Input() set showTruth(showTruth: boolean) {
    this._showTruth = showTruth;
    this.formatData();
  }

  constructor(
    private readonly element: ElementRef<HTMLElement>,
    private readonly percentPipe: PercentPipe,
    private readonly jsonPipe: JsonPipe
  ) {}

  formatData(): void {
    const proportionOfPositiveTests =
      this._covidData!.newCases / this._covidData!.numberOfTests;

    const formattedProportion = this.percentPipe.transform(
      proportionOfPositiveTests,
      '1.2-2'
    );

    console.log(
      this.jsonPipe.transform(this._covidData) + ' ' + formattedProportion
    );

    const elementStyle = this.element.nativeElement.style;
    elementStyle.backgroundColor = this._showTruth
      ? 'lightblue'
      : 'transparent';
    elementStyle.color =
      proportionOfPositiveTests > this._positiveTestThreshold ? 'red' : 'green';
  }
}
