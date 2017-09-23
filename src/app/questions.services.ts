import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Questionaire } from './questionaire';

@Injectable()
export class QuestionService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private questionsUrl = 'http://date.jsontest.com';  // URL to web api

  constructor(private http: Http) { }

    getQuestions(): Promise<Questionaire[]> {
    
        return this.http.get(this.questionsUrl)
                .toPromise()
                .then(response => response.json().data as Questionaire[])
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}