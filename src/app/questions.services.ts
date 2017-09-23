import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Questionaire } from './questionaire';

@Injectable()
export class QuestionService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private questionsUrl = 'http://localhost/huhy-backend/questionaire';  // URL to web api

  constructor(private http: Http) { }

  postQuestions(question): void {
    console.info("Questions being sent:" + question.eat_yesterday);
        this.http
            .post(this.questionsUrl, question)
            .subscribe();
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}