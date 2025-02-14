import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';


@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css']
})
export class CyberSecurityComponent implements OnInit{

  constructor(private courseService:CourseService){}

  public cyberSecurityDetails:any;

  ngOnInit():void{
    this.courseService.getByIdCourse().subscribe((data)=>{
      this.cyberSecurityDetails=data.find(course=>course.id===4);
      console.log(this.cyberSecurityDetails)
    })
  }
}
