import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  private apiPerros = environment.APIDOGS;
  private apiLibros = environment.APIBOOKS;
  private apiRobots = environment.APIURL3;

  constructor( private httpClient: HttpClient ) {}

  getPerros() {
    return this.httpClient.get<{ message: string, status: string }>(this.apiPerros);
  }

  getLibros(){
    return this.httpClient.get(this.apiLibros);
  }

  getRobots(){
    return this.httpClient.get(this.apiRobots);
  }

}
