import { Injectable } from '@angular/core';
import {Students} from './mock-students';
import {Person} from './Person';
import {Observable, of} from 'rxjs';
import {MessagesService} from './Service/messages.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private messageService: MessagesService) { }
  getStudents(): Observable<Person[]>{
    const stud = of(Students);
    this.messageService.add('Fetching Student Details');
    return stud;
  }
}
