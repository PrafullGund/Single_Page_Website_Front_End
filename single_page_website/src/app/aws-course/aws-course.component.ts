import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-aws-course',
  templateUrl: './aws-course.component.html',
  styleUrls: ['./aws-course.component.css']
})
export class AwsCourseComponent implements OnInit{

  constructor(private courseService:CourseService){}

  public awsDetails:any;

  ngOnInit(): void {
    this.courseService.getByIdCourse().subscribe((data)=>{
      this.awsDetails=data.find(course=>course.id===1);
      console.log(this.awsDetails);
    })
  }
}
