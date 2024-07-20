import { Pipe, PipeTransform } from '@angular/core';
import { CovidData } from '../covid.data';

@Pipe({
  name: 'displayCovidData',
  standalone: true,
})
export class DisplayCovidDataPipe implements PipeTransform {
  transform(dailyData: CovidData, iWantTheTruth: boolean = false): string {
    const formattedDate = dailyData.date.toLocaleDateString('hu-HU');

    const updatedNumberOfTests =
      dailyData.numberOfTests * (iWantTheTruth ? 1 : 2);

    const updatedNumberOfHospitalized: string =
      Math.round(
        dailyData.numberOfPersonsInHospital / (iWantTheTruth ? 1 : 3)
      ).toString() +
      (iWantTheTruth ? '' : ' (mindannyian oltatlan idős krónikus betegek)');

    return `Dátum: ${formattedDate}, Tesztek száma: ${updatedNumberOfTests}, Új esetek: ${dailyData.newCases}, Kórházban lévő személyek: ${updatedNumberOfHospitalized}`;
  }
}
