import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Questionaire } from './questionaire';

@Injectable()
export class QuestionService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private questionsUrl = 'http://localhost/huhy-backend/questionaire';  // URL to web api

  constructor(private http: Http) { }

  postQuestions(question): Response {
    console.info("Questions eat:" + question.eat_yesterday);
    console.info("Questions zip:" + question.zip);
    console.info("Questions email:" + question.email);
    console.info("Questions name:" + question.name);
      var result;
        this.http
            .post(this.questionsUrl, question)
            .subscribe(res => result = res)
       return result;
       //result.json;     
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}