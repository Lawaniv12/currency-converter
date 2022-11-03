import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/services/master-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  all_currencies:any;
  quote!: string;
  base!: string;
  amount: any;
  currencyResult!: number;
  rate: any;
  currencyChanger!: FormGroup;
  show: boolean = false;
  constructor(private currency: MasterServiceService) { }

  ngOnInit(): void {
    this.createForm;
    
    this.currency.getCurrency().subscribe((data) => {
     this.all_currencies = data;
    })

  }

  createForm(){
    this.currencyChanger = new FormGroup ({
      base: new FormControl ('', [Validators.required, Validators.minLength(5)]),
      quote: new FormControl ('', [Validators.required, Validators.minLength(4)]),
      amount: new FormControl ('',)
    })
  }

  changeCurrency(){
      this.base = this.currencyChanger.controls["base"].value;
      this.quote = this.currencyChanger.controls["quote"].value;
      this.amount = this.currencyChanger.controls["quote"].value;

      this.currency.currencyCalc(this.base, this.quote).subscribe((data) => {
        this.currencyResult = data[this.quote]*this.amount;
        this.rate = data[this.quote]
        this.show = true;
        console.log(this.currencyResult)
        console.log(this.rate)
      })
  }


}
