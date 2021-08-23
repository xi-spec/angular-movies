import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import database from '../constant/database';
import {  MovieDetail, MovieObject, MovieVideo } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private database = database.base;
  private apiKey = database.apiKey;

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMoviesList(category: string, page: number): Observable<MovieObject> {
    return this.http
      .get<MovieObject>(
        `${this.database}/movie/${category}?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(
        catchError(this.handleError<MovieObject>(`getMoviesList--${category}`))
      );
  }

  getMovieDetail(id: number): Observable<MovieDetail> {
    return this.http
      .get<MovieDetail>(`${this.database}/movie/${id}?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError<MovieDetail>('getMovieDetail')));
  }

  getMovieVideo(id: number): Observable<MovieVideo> {
    return this.http
      .get<MovieVideo>(`${this.database}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError<MovieVideo>('getMovieVideo')));
  }
}
