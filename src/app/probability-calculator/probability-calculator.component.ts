import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-probability-calculator',
  templateUrl: './probability-calculator.component.html',
  styleUrls: ['./probability-calculator.component.scss']
})
export class ProbabilityCalculatorComponent implements OnInit {

  cards: any[] = [];

  allCardsAmount: number = 150;
  playedCards: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.cards = [];
    this.playedCards = 0; 
    for (var i = -2; i <= 12; i++) {
      var max = 10;
      if (i == -2) {
        max = 5;
      } else if (i == 0) {
        max = 15;
      }
      this.cards.push({ number: i, amount: 0, max: max, percentage: 1 / 14 });
    }

    this.updateProbability();
  }

  decrease(val: number) {
    
    var element = this.cards.find(card => card.number == val);
    if (element.amount - 1 >= 0) {
      element.amount--;
      this.cards[val + 2] = element;
      this.playedCards--;
      this.updateProbability();
    }
  }

  increase(val: number) {

    var element = this.cards.find(card => card.number == val);
    if (element.amount + 1 <= element.max) {
      element.amount++;
      this.cards[val + 2] = element;
      this.playedCards++;
      this.updateProbability();
    }
  }

  updateProbability() {
    var remainingCards = this.allCardsAmount - this.playedCards;
    remainingCards = remainingCards == 0 ? 1 : remainingCards;
    this.cards.forEach(card => {
      card.percentage = (card.max - card.amount) / remainingCards;
    });
  }


}
