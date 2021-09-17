import { Component } from '@angular/core';

import {CalculatorCiService} from './service/calculator.ci.service';
import {InitialInvestment} from './model/initialInvestment';
import {InvestmentYield} from './model/investmentYield';

import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorCiService]
})
export class AppComponent {

  public investmentData = new InitialInvestment();
  public revenue: number = 0.0;
  public finalBalance: number = 0.0;

  /** Configuración de la tabla */
  public displayedColumns: string[] = ['Año', 'Inversión', 'Incremento', 'Rendimiento', 'Saldo Final'];
  public dataSource: any;

  constructor(
    private _calculatorService : CalculatorCiService
  ){}

  ngOnInit(): void {
    this.investmentData = new InitialInvestment();
  }

  createSimulation() {
    const investmentRequest = {...this.investmentData};
    this._calculatorService.postCalculatorCi(investmentRequest).subscribe(
      result => {
        console.log(result);
        this.dataSource = new MatTableDataSource<InvestmentYield>(result);
        const sumIncrements = result.reduce((sum,curren) => sum + curren.yearlyInput, 0)
        this.finalBalance = result[this.investmentData.investmentYears-1].finalBalance;
        this.revenue = this.finalBalance - sumIncrements - result[0].initialInvestment;
        console.log(sumIncrements);
        console.log(this.finalBalance);
        console.log(this.revenue);
      },
      error => {
        console.log(error);
      }
    );
  }
}
