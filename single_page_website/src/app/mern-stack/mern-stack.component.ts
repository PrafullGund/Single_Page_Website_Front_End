import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-mern-stack',
  templateUrl: './mern-stack.component.html',
  styleUrls: ['./mern-stack.component.css']
})
export class MernStackComponent implements OnInit{
  public mernStackDetails:any;

  constructor(private courseService:CourseService){}

  ngOnInit(): void {
    this.courseService.getByIdCourse().subscribe((data)=>{
      this.mernStackDetails=data.find(course=>course.id===3);
      console.log(this.mernStackDetails);
    })
  }
}
