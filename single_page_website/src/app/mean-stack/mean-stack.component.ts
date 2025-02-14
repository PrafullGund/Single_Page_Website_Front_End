import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-mean-stack',
  templateUrl: './mean-stack.component.html',
  styleUrls: ['./mean-stack.component.css']
})
export class MeanStackComponent implements OnInit {
  public meanStackDetails: any;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getByIdCourse().subscribe((data)=>{
      this.meanStackDetails=data.find(course=>course.id===2);
      console.log(this.meanStackDetails);
    })
  }
}