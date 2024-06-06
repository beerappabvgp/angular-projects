import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';
import { CommonModule } from '@angular/common';
import { FunctionOutputComponent } from '../function-output/function-output.component';
import { ContentComponent } from '../content/content.component';
import { ViewComponent } from '../view/view.component';
import { DomComponent } from '../dom/dom.component';
import { DirectivesComponent } from '../directives/directives.component';
import { DataService } from '../data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeroServiceService } from '../hero-service.service';
import { FormsComponent } from '../forms/forms.component';


// <div>
//     <ul>
//        @for(post of posts ; track post.id) {
//         <li>{{ post.title }}</li>
//        }
//     </ul>
//     <button (click) = "addPost()">Add Post</button>
//     <button (click) = "updatePost(1)">Update Post</button>
//     <button (click) = "deletePost(1)">Delete Post</button>
// </div>

// <br>


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,InputComponent, OutputComponent, CommonModule, FunctionOutputComponent, ContentComponent, ViewComponent, DomComponent, DirectivesComponent,HttpClientModule , FormsComponent],
  providers: [DataService,HttpClient,HeroServiceService], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private dataService : DataService , private heroService : HeroServiceService) {}
  users = this.heroService.data;
  posts : any[] = [];
  error : string = "";
  ngOnInit() {
    this.dataService.getPosts().subscribe(
      data => this.posts = data,
      error => this.error = error
    );
  }

  addPost() {
    const newPost = { title: 'New Post', body: 'This is a new post.' };
    this.dataService.addPost(newPost).subscribe(
      post => this.posts.push(post),
      error => this.error = error
    );
  }

  updatePost(id : number) {
    const updatedPost = { title: 'Updated Post', body: 'This post has been updated.' };
    this.dataService.updatepost(id , updatedPost).subscribe(
      post => {
        const index = this.posts.findIndex(post => post.id === id);
        this.posts[index] = post;
      },
      error => this.error = error,
    );
  }

  deletePost(id : number) {
    return this.dataService.deletePost(id).subscribe(
      () => this.posts = this.posts.filter(p => p.id !== id),
      error => this.error = error,
    )
  }

  @ViewChild('para') para! : ElementRef<HTMLHeadingElement>;
  updateContent() {
    this.para.nativeElement.innerText = "The content has been changed!!!";
  }
  name = "Bharath";
  panelState! : boolean;
  user! : User;

  handleUser(user : User) {
    this.user = user;
  }

  handleChangeName(name : string) {
    this.name = name;
  }

  savePanelState(state : boolean) {
    this.panelState = state
  } 





}

export interface User {
  name : string,
  education : string,
}