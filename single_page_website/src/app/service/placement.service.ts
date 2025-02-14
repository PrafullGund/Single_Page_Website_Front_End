import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  private baseUrl='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getAllTestimonials(): Observable<any[]> {
    return this.http
      .get<{ success: boolean; data: any[] }>(`${this.baseUrl}/testimonials`)
      .pipe(
        map((response) => {
          return response.data.map((item) => ({
            ...item,
            imageUrl: `${this.baseUrl}${item.imageUrl}`,
          }));
        })
      );
  }
  
}

