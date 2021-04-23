import { Injectable } from '@angular/core';
import {Students} from './mock-students';
import {Person} from './Person';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  getStudents(): Observable<Person[]>{
    const stud = of(Students);
    return stud;
  }
}
