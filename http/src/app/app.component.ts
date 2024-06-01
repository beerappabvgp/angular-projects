import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'http';
  constructor(private dataService: DataService) {}
  posts : any[] = [];
  error : string = '';
  ngOnInit(): void {
      this.dataService.getPosts().subscribe(
        data => {
        this.posts = data;
      },
        error => {
          this.error = error;
        }
    );
  }

  addPost() {
    const newPost = {
      title : 'New Post',
      body: 'This is a new Post.',
    }
    this.dataService.addpost(newPost).subscribe(
      post => {
        this.posts.push(post);
    },
      error => {
        this.error = error;
      }
  );
  }

  updatePost(id: number) {
    const updatedPost = { title: 'Updated Post', body: 'This post has been updated.' };
    this.dataService.updatepost(id , updatedPost).subscribe(
      post => {
      const index = this.posts.findIndex(p => p.id === id);
      this.posts[index] = post;
    },
    error => this.error = error,
  );
  }

  deletePost(id : number) {
    this.dataService.deletePost(id).subscribe(
      () => {
      this.posts = this.posts.filter(p => p.id !== id);
    },
    error => this.error = error,
  );
  }


}
