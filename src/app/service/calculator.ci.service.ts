import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

import {InitialInvestment} from '../model/initialInvestment';
import {InvestmentYield} from '../model/investmentYield';

@Injectable()
export class CalculatorCiService {
  //private calculatorUri = "http://localhost:8080/api/v1/investors/calculators/ci";
  private calculatorUri = "https://xhibebk8zc.execute-api.us-east-2.amazonaws.com/dev/simulations";
  private token = "bbd219cc-488c-4911-b10f-592480b45ffc";

  constructor (private _http: HttpClient) {}

  postCalculatorCi(initialInvestment: InitialInvestment) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.token
      })
    };
    
    return this._http.post(this.calculatorUri, initialInvestment, httpOptions).pipe(
      map((response:any) => response as Array<InvestmentYield>)
    );
  }

}