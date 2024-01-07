import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './service/student.service';
import { Student } from './model/Student';
import { PercentagePipe } from './pipes/percentage.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PercentagePipe,FilterPipe,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
filterText: string ="";
  constructor(private _serv: StudentService) {}

  students: Student[];
  totalMarks: number;

  ngOnInit(): void {
    this.students = this._serv.students;
    this.totalMarks = this._serv.totaMarks;
  }
}
