import { Component, OnInit } from '@angular/core';
import { Questionaire } from './questionaire';
import { QuestionService } from './questions.services';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private questionService: QuestionService) {     
    }

  question: Questionaire
  title = 'HUHY';
  submitted = false;

  postQuestions(): void {
   // var response = this.questionService
   //     .postQuestions(this.question);
    this.submitted = true;
    //console.info("response" +  response);
    //alert(response);
    Observable.timer(0,1000).subscribe(timer=>{
      if (timer >=999) this.submitted = false;
    });
  }

  ngOnInit(): void {
    this.question = new Questionaire();
    this.question.eat_yesterday="unanswered";
    this.question.money_ranout="unanswered";
    this.question.money_worry="unanswered";
    this.question.zip="unanswered";
    this.question.name="unanswered";
  }
}

