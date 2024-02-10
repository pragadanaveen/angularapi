import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proser';


  posts:any;
  
    constructor(private service:PostService) {}
  
    ngOnInit() {
  
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}
