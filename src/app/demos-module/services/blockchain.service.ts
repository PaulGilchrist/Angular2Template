
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BlockchainService {
    _tickerUrl = 'https://blockchain.info/ticker?cors=true';
    _exchangeRates: any;

    // Assumes HTTP_PROVIDERS was added as a provider at a higher level
    constructor(private _http: HttpClient) { }

    public getUsdExchangeRate(): Observable<number> {
        return this._http.get(this._tickerUrl).pipe(
            map(res => (res as any).USD.last),
            catchError(this.handleError)
        );
    }

    private handleError(error: Response) {
        // In the future, we may send the server to some remote logging infrastructure
        console.error(error);
        return observableThrowError(error || 'Server error');
    }

}