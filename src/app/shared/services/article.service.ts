import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Article } from '../model/article.model';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url: string = 'http://localhost:3000/articles';
  sub$: Observable<Article[] | any> = null;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[] | any> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'public max-age=3 must-revalidate');

    this.sub$ = this.http
      .get<Article[]>(this.url, { 'headers': headers }).pipe(
        tap(result => console.log('Opgehaald via: ', this.url, ' result:', result)),
        catchError(err => {
          console.log('Geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
          // De methode moet een observable terug geven
          // genereer daarom een observable op basis van err
          return of(err);
        }));
    return this.sub$;
  }

  getArticle(id: number): Observable<Article | any> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'max-age=30 must-revalidate');

    return this.http.get<Article>(`${this.url}/${id}`, { 'headers': headers })
      .pipe(
        tap(result => console.log('Opgehaald via: ', this.url, '/', id, ' result:', result)),
        catchError(err => {
          console.log('Get geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
          // De methode moet een observable terug geven
          // genereer daarom een observable op basis van err
          return of(err);
        })
      );
  }
}
