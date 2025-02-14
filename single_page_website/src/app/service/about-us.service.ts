import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  private baseUrl = 'http://localhost:3000'; // Update this base URL if needed

  constructor(private http: HttpClient) {}

  getByIdOurTeam(): Observable<any[]> {
    return this.http.get<{ success: boolean; data: any[] }>(`${this.baseUrl}/ourTeam`).pipe(
      map((response) => {
        console.log(response);
        return response.data; // Assuming the backend response includes { success, data }
      })
    );
  }
}
