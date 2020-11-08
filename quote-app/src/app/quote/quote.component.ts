import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'None can destroy iron.', 'Tiny buddha',"Eid",new Date(2020,8,27)),
    new Quote(2,'Great things never come from comfort zones.','Roy T. Bennett',"Eid",new Date(2020,8,27)),
    // new Quote(3,'The future belongs to those who believe in the beauty of their dreams.','Eleanor Roosevelt',"Peter",new Date(2020,8,27)),
    // new Quote(4,'Dont stop when you are tired. Stop when you are done.','Marilyne Monroe',"Peter",new Date(2020,8,27)),
    // new Quote(5,'Do something today that your future self will thank you for.','Sean Patrick Flanery',"Peter",new Date(2020,8,27)),
    // new Quote(6,'If you can dream it,You can do it.','Walt Disney',"Peter",new Date(2020,8,27)),
  ];

  addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+1;
   quote.completeDate = new Date(quote.completeDate)
   this.quotes.push(quote)
 } 
  votingup(index){
    this.quotes[index].upvote++
  }
  votingdown(index){
    this.quotes[index].downvote++
  }
 deleteQuote(isDelete, index){
   if (isDelete) {
     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].user}?`)
 
     if (toDelete){
       this.quotes.splice(index,1)
     }
   }
 }
   constructor() { }
 
   ngOnInit() {
   }
 
 }
