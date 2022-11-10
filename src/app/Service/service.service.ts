import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { AddShoe } from '../Model/model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddShoeService {
url : string = "http://localhost:3000/shoe"
  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get<AddShoe[]>(this.url);
  }
  public updateShoe(id : number, addShoe : AddShoe): Observable<Object>{
    return this.httpClient.put<AddShoe>(`${this.url}/${id}`, addShoe);
  }
  public deleteShoe(id : number) : Observable<AddShoe>{
    return this.httpClient.delete<AddShoe>(`${this.url}/${id}`);
  }
  public addShoe(addShoe : AddShoe) : Observable<Object>{
    return this.httpClient.post(`${this.url}`, addShoe);
  }
}

