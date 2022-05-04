import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroUsuarioService {
  myAppUrl = 'https://localhost:44307/';
  myApiUrl = 'api/Usuario';

  constructor(private http: HttpClient) {}

  getListUsuarios(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  getListUsuarioById(_id: string): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + _id);
  }

  deleteUsuarios(_id: string): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + _id);
  }

  saveUsuarios(usuario: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  updateUsuarios(_id: string, usuario: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + _id, usuario);
  }
}
