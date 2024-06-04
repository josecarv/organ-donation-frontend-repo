import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ILocalityDto } from '../models/LocalityDto.model';


@Injectable({
  providedIn: 'root'
})
export class LocalityService {
  private baseUrl = 'http://localhost:54213/api/locality/';
  constructor(private http: HttpClient) { }

  getAllLocalities(pageNumber: number = 1, pageSize: number = 100): Observable<ILocalityDto[]> {    
    let params = new HttpParams();
    
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());

    return this.http.get<ILocalityDto[]>(this.baseUrl + 'GetAllLocalities', { params })
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
