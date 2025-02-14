import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getByIdCourse():Observable<any[]>{
    return this.http
      .get<{success:boolean; data:any[]}>(`${this.baseUrl}/course`)
      .pipe(
        map((response)=>{
          console.log(response);
          return response.data;
        })
      )}

  getAllCourse():Observable<any[]>{
    return this.http
      .get<{success:boolean; data:any[]}>(`${this.baseUrl}/course`)
      .pipe(
        map((response)=>{
          console.log(response);
          return response.data;
        })
      )}
}