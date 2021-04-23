import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Person} from '../Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessagesService} from './messages.service';
import {Observable, of} from 'rxjs';
import {Students} from '../mock-students';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // tslint:disable-next-line:typedef
  createDb() {
    const heroes = [
      {age: 11, name: 'Dr Nice', location: 'Bengaluru'},
      {age: 12, name: 'Narco', location: 'Mumbai'},
      {age: 13, name: 'Bombasto', location: 'hyderabad'},
      {age: 14, name: 'Celeritas', location: 'Chennai'},
      {age: 15, name: 'Magneta', location: 'Bengaluru'},
      {age: 16, name: 'RubberMan', location: 'Bengaluru'},
      {age: 17, name: 'Dynama', location: 'Chennai'},
      {age: 18, name: 'Dr IQ', location: 'Delhi'},
      {age: 19, name: 'Magma', location: 'Bengaluru'},
      {age: 20, name: 'Tornado', location: 'Calicut'}
    ];
    return {heroes};
  }
  genId(heroes: Person[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.age)) + 1 : 11;
  }
  // tslint:disable-next-line:typedef
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  getHeroes(): Observable<Person[]> {  return this.http.get<Person[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Person[]>('getHeroes', []))
    );
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getHero(id: number): Observable<Person> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched student id=${id}`)),
      catchError(this.handleError<Person>(`getstudent id=${id}`))
    );
  }
  updateHero(hero: Person): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated student id=${hero.age}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

}
