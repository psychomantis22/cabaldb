import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gem-calc',
  templateUrl: './gem-calc.component.html',
  styleUrls: ['./gem-calc.component.css']
})
export class GemCalcComponent implements OnInit {
  gemas_por_card: number = 666.666666;
  isResultVisible: boolean = false;
  preco_card: number = 1500000000;
  quantidade_gema: number = 1;

  ngOnInit(): void {
    if (localStorage && localStorage["card_price"])
    {
      this.preco_card = localStorage["card_price"];
    }
  }

  saveCardPrice = () => {
    if (localStorage) {
      localStorage["card_price"] = this.preco_card;
    }
  }

  calcGem = () => {
    this.saveCardPrice();
    this.isResultVisible = true;
  }
}
