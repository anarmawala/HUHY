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

  questions: Questionaire[]
  title = 'app';

  // getQuestions(): void {
  //   this.questionService
  //       .getQuestions()
  //       .then(questions => this.questions = questions);
  // }

  getQuestions(): void {

    var q1 = new Questionaire();
    q1.time = "blah";
    q1.date = "sdsd";
    q1.milliseconds_since_epoch = "blah";
    
    var q2 = new Questionaire();
    q1.time = "blah";
    q2.date = "wewew";
    q2.milliseconds_since_epoch = "blah";
    
    this.questions = [q1,q2];
  }

  ngOnInit(): void {
    this.getQuestions();
  }
}

