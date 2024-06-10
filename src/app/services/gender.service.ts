import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenderDto } from '../models/Gender.model';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private baseUrl = 'http://localhost:5049/api/gender/';
  constructor(private http: HttpClient) { }
  getAllGender(): Observable<IGenderDto[]> {   
    return this.http.get<IGenderDto[]>(this.baseUrl + 'GetAllGender', )
        .pipe(
            catchError(error => {
                console.error('Error:', error);
                throw error;
            })
        );
  };

  getGenderById(id:number): Observable<IGenderDto> {    
    const url = `${this.baseUrl}${id}`;
    return this.http.get<IGenderDto>(url)
        .pipe(
            catchError(error => {
                console.error('Error:', error);
                throw error;
            })
        );
  };
}
