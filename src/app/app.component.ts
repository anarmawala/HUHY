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

  // getQuestions(): void {
  //   this.questionService
  //       .getQuestions()
  //       .then(questions => this.questions = questions);
  // }

  setEatYesterday(value): void {
    alert(value);
  }

  setMoneyWorry(value): void {
    alert(value);
  }

  setMoneyRanout(value): void {
    alert(value);
  }

  ngOnInit(): void {
    this.question = new Questionaire();
  }
}

