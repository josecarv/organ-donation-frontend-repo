import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ILocalityDto } from '../models/LocalityDto.model';


@Injectable({
  providedIn: 'root'
})
export class LocalityService {
  private baseUrl = 'http://localhost:5049/api/locality/';
  constructor(private http: HttpClient) { }

  getAllLocalities(): Observable<ILocalityDto[]> {   
    return this.http.get<ILocalityDto[]>(this.baseUrl + 'GetLocalities', )
        .pipe(
            catchError(error => {
                console.error('Error:', error);
                throw error;
            })
        );
  };

  getLocalityById(id:number): Observable<ILocalityDto> {    
    const url = `${this.baseUrl}${id}`;
    return this.http.get<ILocalityDto>(url)
        .pipe(
            catchError(error => {
                console.error('Error:', error);
                throw error;
            })
        );
  };
}
