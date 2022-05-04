import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RegistroMascotaService {
  myAppUrl = 'https://localhost:44307/';
  myApiUrl = 'api/Mascota';

  constructor(private http: HttpClient) {}

  getListMascotas(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  getListMascotaById(_id: string): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + _id);
  }

  deleteMascotas(_id: string): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + _id);
  }

  saveMascotas(mascota: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, mascota);
  }

  updateMascotas(_id: string, mascota: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + _id, mascota);
  }
}
