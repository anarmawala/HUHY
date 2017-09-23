import { Component, OnInit } from '@angular/core';
import { Questionaire } from './questionaire';
import { QuestionService } from './questions.services';

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

  postQuestions(): void {
    this.questionService
        .postQuestions(this.question);
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

