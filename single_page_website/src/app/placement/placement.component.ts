import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../service/placement.service';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit{
  public allTestimonials: any[] = []; // All records fetched from API
  public itTestimonials: any[] = []; // IT students
  public nonITTestimonials: any[] = []; // Non-IT students

  constructor(private placementService: PlacementService) {}

  ngOnInit(): void {
    this.placementService.getAllTestimonials().subscribe((data) => {
      console.log('API Response:', data); // Debugging log
      this.allTestimonials = data.map((testimonial) => ({
        ...testimonial,
        imageUrl: `${testimonial.imageUrl}`,
      }));
      this.separateTestimonials(); // Separate IT and Non-IT students
    });
  }

  separateTestimonials(): void {
    this.itTestimonials = this.allTestimonials.filter(
      (testimonial) => testimonial.field === 'it students'
    ); // Filter for IT students

    this.nonITTestimonials = this.allTestimonials.filter(
      (testimonial) => testimonial.field === 'non-it students'
    ); // Filter for Non-IT students

    console.log('IT Testimonials:', this.itTestimonials); // Debugging log
    console.log('Non-IT Testimonials:', this.nonITTestimonials); // Debugging log
  }
}
