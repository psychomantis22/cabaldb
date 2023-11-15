import { Component } from '@angular/core';


@Component({
  selector: 'app-gem-calc',
  templateUrl: './gem-calc.component.html',
  styleUrls: ['./gem-calc.component.css']
})
export class GemCalcComponent {
  gemas_por_card: number = 666.666666;
  isResultVisible: boolean = false;
  preco_card: number = 1500000000;
  quantidade_gema: number = 1;

  calcGem = () => {
    this.isResultVisible = true;
  }
}
