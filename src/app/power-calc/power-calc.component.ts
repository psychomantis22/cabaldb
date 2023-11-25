import { Component } from '@angular/core';

interface possibleStatModel {
  code: string,
  name: string,
  cp: number,
  dmg: number
}

interface statModel {
  status: possibleStatModel,
  value: number
}

@Component({
  selector: 'app-power-calc',
  templateUrl: './power-calc.component.html',
  styleUrls: ['./power-calc.component.css']
})
export class PowerCalcComponent {
  possibleStats : possibleStatModel[] = [
    { code: 'amp', name: 'Amplificação', cp: 348.8, dmg: 0 },
    { code: 'dc', name: 'Danos Críticos', cp: 176.45, dmg: 0 },
    { code: 'atk', name: 'Ataque', cp: 34.6, dmg: 0 },
    { code: 'perf', name: 'Perfuração', cp: 70.93, dmg: 0 },
    { code: 'reddanos', name: 'Redução de Danos', cp: 19.5, dmg: 0 },
    { code: 'ac', name: 'Acerto', cp: 6.5, dmg: 0 },
    { code: 'prec', name: 'Precisão', cp: 3, dmg: 0 },
    { code: 'ev', name: 'Evasão', cp: 2.4, dmg: 0 },
    { code: 'def', name: 'Defesa', cp: 21.2, dmg: 0 }
  ]

  selectedStats :statModel[] = [];
  
  selectedStatusCode : string = this.possibleStats[0].code;
  selectedStatusValue : number = 0;

  addStat = () => {
    if (this.selectedStatusCode && this.selectedStatusValue > 0)
    {
      this.selectedStats.push({
        status: this.possibleStats.filter(s => s.code == this.selectedStatusCode)[0],
        value: this.selectedStatusValue
      });

      this.selectedStats.sort((a, b) => ((b.value * b.status.cp) - (a.value * a.status.cp)));
    }
  }

  clear = () => {
    this.selectedStats = [];
  }
}
