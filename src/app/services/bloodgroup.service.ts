import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IBloodGroupDto } from '../models/BloodGroup.model';

@Injectable({
  providedIn: 'root'
})
export class BloodgroupService {
  private baseUrl = 'http://localhost:5049/api/bloodgroup/';
  constructor(private http: HttpClient) { }
  getAllBloodGroup(): Observable<IBloodGroupDto[]> {   
    return this.http.get<IBloodGroupDto[]>(this.baseUrl + 'GetAllBloodGroup', )
        .pipe(
            catchError(error => {
                console.error('Error:', error);
                throw error;
            })
        );
  };

  getBloodGroupById(id:number): Observable<IBloodGroupDto> {    
    const url = `${this.baseUrl}${id}`;
    return this.http.get<IBloodGroupDto>(url)
        .pipe(
            catchError(error => {
                console.error('Error:', error);
                throw error;
            })
        );
  };
}