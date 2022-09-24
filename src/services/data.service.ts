import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {error} from '@angular/compiler-cli/src/transformers/util';
import {catchError, throwError} from 'rxjs';

@Injectable()
export class DataService {

  private token: string = 'f3af7847b01886938081fec784ab8129b08a7a9fa64b9db42f87750870380ce9790b069861110cdf6365145810b97b4cfe63406fa4afba29a6699c65ba3052c879a5471b39504ffbcb3870a086c49fded8989500b6905aaaca95407f442dfc803ff9e99876cf1102b33d802478f845678c1835024dde1f16c584bb7aead0ffac';
  private artworksHttps: string = 'https://apihackaton.zacheta.art.pl/api/v1/artworks';

  constructor(private http: HttpClient) { }

  getData() {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${(this.token)}`,
          'Accept': 'application/vnd.api+json',
          'Referer': 'http://localhost:4200',
          'Origin': 'http://localhost:4200',
        })
    }

    return this.http.get(this.artworksHttps, httpOptions)
      .pipe(catchError(
        (error) => {
          console.log(error);
          return throwError('Błąd!')
    }));
  }

}
