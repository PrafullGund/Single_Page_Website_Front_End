import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  public courseDetails:any;
  public selectedCourse:string='';

  constructor(private courseService:CourseService){}

  ngOnInit(): void {
    this.courseService.getAllCourse().subscribe((data)=>{
      this.courseDetails=data;
      console.log(this.courseDetails);
    })
  }
}
