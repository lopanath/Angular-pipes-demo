import { Injectable } from '@angular/core';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  students: Student[] = [
    {
      name: 'Mark Vought',
      course: 'MBA',
      marks: 520,
      DOB: new Date('1997-11-12'),
      gender: 'Male',
    },
    {
      name: 'Steve Smith',
      course: 'BTECH',
      marks: 420,
      DOB: new Date('1678-1-24'),
      gender: 'Male',
    },
    {
      name: 'Merry Jane',
      course: 'MBA',
      marks: 540,
      DOB: new Date('1993-2-4'),
      gender: 'Female',
    },
    {
      name: 'John Doe',
      course: 'BTECH',
      marks: 380,
      DOB: new Date('1997-08-23'),
      gender: 'Male',
    },
    {
      name: 'Sarah Smith',
      course: 'M.SC',
      marks: 430,
      DOB: new Date('1999-12-1'),
      gender: 'Female',
    },
    {
      name: 'Jonas Weber',
      course: 'M.SC',
      marks: 320,
      DOB: new Date('1990-1-16'),
      gender: 'Male',
    },
  ];

  totaMarks : number = 600;
}
