import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facility } from '../common/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private baseUrl = 'http://localhost:8080/api/v1/facility'
  constructor(private httpClient: HttpClient) { }

  getFacilityList(): Observable<Facility[]> {

    return this.httpClient.get<Facility[]>(this.baseUrl);
    
  }
}

