import { Injectable } from '@angular/core';
import {Students} from './mock-students';
import {Person} from './Person';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  getStudents(): Person[]{
    return Students;
  }
}
