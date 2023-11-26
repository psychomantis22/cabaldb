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
    { code: 'ac', name: 'Acerto', cp: 6.5, dmg: 0 },
    { code: 'amp', name: 'Amplificação', cp: 348.8, dmg: 0 },
    { code: 'atk', name: 'Ataque', cp: 34.6, dmg: 0 },
    { code: 'adf', name: 'Aumento do Dano Final', cp: 1604, dmg: 0 },
    { code: 'adn', name: 'Aumento do Dano Normal', cp: 85, dmg: 0 },
    { code: 'bloq', name: 'Bloqueio', cp: 5.3, dmg: 0 },
    { code: 'cip', name: 'Cancelar Ignorar Perfuração', cp: 47.8, dmg: 0 },
    { code: 'cireddanos', name: 'Cancelar Ignorar Redução de Danos', cp: 19.9, dmg: 0 },
    { code: 'dfr', name: 'Dano Final Reduzido', cp: 1451, dmg: 0 },
    { code: 'admg', name: 'Danos Adicional', cp: 35, dmg: 0 },
    { code: 'dc', name: 'Danos Críticos', cp: 176.45, dmg: 0 },
    { code: 'def', name: 'Defesa', cp: 21.2, dmg: 0 },
    { code: 'ev', name: 'Evasão', cp: 2.4, dmg: 0 },
    { code: 'hp', name: 'HP', cp: 5, dmg: 0 },
    { code: 'igac', name: 'Ignorar Acerto', cp: 5.3, dmg: 0 },
    { code: 'igbloq', name: 'Ignorar Bloqueio', cp: 4.5, dmg: 0 },
    { code: 'igperf', name: 'Ignorar Perfuração', cp: 53.1, dmg: 0 },
    { code: 'igreddanos', name: 'Ignorar Redução de Danos', cp: 4.5, dmg: 0 },
    { code: 'igresdc', name: 'Ignorar Res. Danos Críticos', cp: 142.5, dmg: 0 },
    { code: 'igrestaxa', name: 'Ignorar Res. Taxa Crítica', cp: 574, dmg: 0 },
    { code: 'igresamp', name: 'Ignorar Res. Téc. Amp.', cp: 267, dmg: 0 },
    { code: 'perf', name: 'Perfuração', cp: 70.93, dmg: 0 },
    { code: 'prec', name: 'Precisão', cp: 3, dmg: 0 },
    { code: 'reddanos', name: 'Redução de Danos', cp: 19.5, dmg: 0 },
    { code: 'resdc', name: 'Res. Danos Críticos', cp: 150, dmg: 0 },
    { code: 'restaxa', name: 'Res. Taxa Crítica', cp: 636, dmg: 0 },
    { code: 'resamp', name: 'Res. Todas as Téc. Amp.', cp: 296.5, dmg: 0 },
    { code: 'taxa', name: 'Taxa Crítica', cp: 750, dmg: 0 }
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
