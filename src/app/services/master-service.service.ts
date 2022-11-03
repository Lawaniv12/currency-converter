import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class MasterServiceService {
  constructor(private http: HttpClient) {}

  getCurrency() {
    return this.http.get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'
    );
  }

  currencyCalc(base: string, quote: string): Observable<any> {
    return this.http.get<any>(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}/${quote}.json`
    );
  }

  btcBase() {
    return this.http.get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json'
    );
  }

  euroBase() {
    return this.http.get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/euro.json'
    );
  }

  getCountriesFlag(): Promise<any> {
    let fdsf: any = {};
    let arrayOfSymbols: any[] = [];

    return new Promise((resolve, reject) => {
      fetch('https://restcountries.com/v3.1/all')
        .then((res: any) => res.json())
        .then((data: any) => {
          for (let country of data) {
            for (let symbol in country.currencies) {
              // console.log(symbol, country.flags.svg)
              arrayOfSymbols.push(symbol);
              if (
                symbol.toLowerCase() == 'usd' &&
                !country.name.official
                  .toLowerCase()
                  .includes('united states of america')
              ) {
                //
              } else {
                fdsf[symbol] = country.flags.svg;
              }
            }
          }

          resolve(fdsf)
        });
    });
  }
}
