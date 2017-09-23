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
  count = 0;

  postQuestions(): void {
    var response = this.questionService
       .postQuestions(this.question);
    this.submitted = true;
    console.info("response" +  response);
  }

  ngOnInit(): void {
    this.question = new Questionaire();
    this.question.eat_yesterday="unanswered";
    this.question.money_ranout="unanswered";
    this.question.money_worry="unanswered";
    this.question.zip="60602";
    this.question.name="my name";
    this.question.email="abc@email.com";
    this.count = 60;
  }
}

