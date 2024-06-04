import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INationalityDto } from '../models/Nationality.model';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {
  private baseUrl = 'http://localhost:54213/api/locality/';
  constructor(private http: HttpClient) { }

  getAllNationalities(pageNumber: number = 1, pageSize: number = 100): Observable<INationalityDto[]> {    
    let params = new HttpParams();
    
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());

    return this.http.get<INationalityDto[]>(this.baseUrl + 'GetAllNationalities', { params })
        .pipe(
            catchError(error => {
                console.error('Error:', error);
                throw error;
            })
        );
  };

  getNationalityById(id:number): Observable<INationalityDto> {    
    const url = `${this.baseUrl}${id}`;
    return this.http.get<INationalityDto>(url)
        .pipe(
            catchError(error => {
                console.error('Error:', error);
                throw error;
            })
        );
  };
}