import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../service/about-us.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public aboutUsDetails:any;

  constructor(private aboutUsService:AboutUsService){}

  ngOnInit(): void {
    this.aboutUsService.getByIdOurTeam().subscribe((data) => {
      this.aboutUsDetails = data; // Assuming data is an array of team members
      console.log(this.aboutUsDetails);
    });
  }
}
