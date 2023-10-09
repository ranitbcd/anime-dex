import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiBaseUrl = 'https://api.jikan.moe/v4/anime'
  constructor(private http: HttpClient) { }
  getHeader(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return headers;
  }
  getAllAnimeDetails():Observable<any> {
    const headers: HttpHeaders = this.getHeader();
    const url = `${this.apiBaseUrl}`;
    return this.http.get(url, { headers});
  }
}
