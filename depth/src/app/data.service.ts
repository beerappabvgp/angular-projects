import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) {}

  getPosts() : Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  addPost(newPost : any) : Observable<any> {
    return this.http.post(this.apiUrl , newPost).pipe(
      catchError(this.handleError)
    );
  }

  updatepost(id : number , post : any) : Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, post).pipe(
        catchError(this.handleError)
      );
  }

  deletePost(id : number) : Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error : HttpErrorResponse) {
    let errorMessage = "Unkonwn Error!!";
    if(error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`
    } else {
      errorMessage = `Error code : ${error.status}\nMessage: ${error.message}`
    }
    return throwError(errorMessage);
  }

}
