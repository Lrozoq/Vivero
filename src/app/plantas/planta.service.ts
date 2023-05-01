import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from './planta';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantaService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.baseUrl);
  }
}
