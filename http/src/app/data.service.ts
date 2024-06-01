import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable,catchError,throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  addpost(post: any) {
    return this.http.post(this.apiUrl,post).pipe(
      catchError(this.handleError)
    );
  }

  updatepost(id : number , post: any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post).pipe(
      catchError(this.handleError)
    );
  }
  
  deletePost(id : number) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error : HttpErrorResponse) {
    let errorMessage = "unknown";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error code : ${error.status}\n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
