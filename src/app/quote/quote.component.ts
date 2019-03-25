import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("MLK", "Martin Luther King", "Injustice anywhere is a threat to justice everywhere."),
    new Quote("Life", "Margeret Atwood", "In the end we all become stories   ")
  ]
  // previousNo: number
  // lastNo: number
  // token: number

  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }

  upvote(i) {
    this.quotes[i].upvotes + 1
  }
  downvote(i) {
    this.quotes[i].downvotes + 1
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
//   highestUpvote(){
//     this.previousNo = 0
//     this.lastNo = 0
//
//   for(this.token = 0 ; this.token <this.quotes.length; this.token++) {
//   this.lastNo = this.quotes[this.token].upvotes;
//   if (this.lastNo > this.previousNo) { this.previousNo = this.lastNo }
// }
// return this.previousNo
// }

constructor() { }

ngOnInit() {
}

}
