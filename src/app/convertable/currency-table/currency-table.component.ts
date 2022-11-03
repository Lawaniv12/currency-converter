import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/services/master-service.service';
import { NgxPaginationModule } from 'ngx-pagination/lib/ngx-pagination.module';
import { MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss'],
})
export class CurrencyTableComponent implements OnInit {
  flagsDictionary = new BehaviorSubject<any>(null);
  btcPrices = new BehaviorSubject<any>(null);

  totalLength: any;
  pg: number = 1;
  page!: number;
  base: any;
  quote: any;
  countries = new BehaviorSubject<any>(null);
  amount: any;
  rate!: number;

  displayedColumns = [];
  currencyConvert!: number;
  constructor(private flags: MasterServiceService) {}

  ngOnInit(): void {
    this.refineData();
    // this.oFinal()

    this.flags.getCountriesFlag().then((res: any) => {
      this.flagsDictionary.next(res);
    });

    this.flags.getCurrency().subscribe((data) => {
      this.countries.next(data);
    });

    // this.flags.currencyCalc(this.base, this.quote).subscribe((data) => {
    //   this.currencyConvert = data[this.quote]*this.amount;
    //   this.rate = data[this.quote]
    //   console.log(this.currencyConvert)
    //   console.log(this.rate)
    // })

    this.flags.btcBase().subscribe((res: any) => {
      let tt = res.btc;
      this.btcPrices.next(tt);
    });

    // this.flags.euroBase().subscribe((res: any) => {
    //   console.log(res)
    // })
  }

  finalArr: any[] = [];
  refineData() {
    this.countries.subscribe((countries) => {
      if (countries) {
        this.flagsDictionary.subscribe((flagsDictionary) => {
          if (flagsDictionary) {
            console.log(flagsDictionary)
            this.btcPrices.subscribe((btcPrices) => {
              if (btcPrices) {
                for (let currency in countries) {
                  let country: any = {
                    // symbol: 'USD',
                    // fullName: 'United States Dollar',
                    // flag: 'sdffjhgkj',
                    // btcPrice: 12234
                  };
                  country.symbol = currency;
                  country.fullName = countries[currency];
                  country.flag = flagsDictionary[currency.toUpperCase()];
                  country.btcPrice = btcPrices[currency];
                  
                  this.finalArr.push(country);
                }
                console.log(this.finalArr)
              }
            });
          }
        });
      }
    });
  }
}
