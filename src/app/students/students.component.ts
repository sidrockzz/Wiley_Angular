import { Component, OnInit } from '@angular/core';
import {Person} from '../Person';
import {Students} from '../mock-students';
import {StudentsService} from '../students.service';
import {MessagesService} from '../Service/messages.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  selectedStudent ?: Person;
  student: Person[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private stu_service: StudentsService, private messageService: MessagesService) { }
    getStudent(): void {
    this.stu_service.getStudents().subscribe(
        stud => this.student = stud
      );
    }

  ngOnInit(): void {
    this.getStudent();
  }
  onSelect(p: Person): void{
    this.selectedStudent = p;
    // tslint:disable-next-line:typedef no-shadowed-variable
    this.messageService.add('Select student to be added: '.concat(p.name));
  }
  save(): void {
    // @ts-ignore
    this.selectedStudent.updateHero(this.student)
      .subscribe(() => this.goBack());
  }

  // tslint:disable-next-line:typedef
  goBack() {
        throw new Error('Method not implemented.');
    }
}

