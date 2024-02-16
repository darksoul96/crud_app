import { Injectable } from '@angular/core';
import { AppConfigFile } from '../app.configfile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<UserInterface> {
    return this.http.get<UserInterface>(AppConfigFile.apiUrl + '/data');
  }
}
