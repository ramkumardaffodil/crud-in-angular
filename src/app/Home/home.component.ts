import { Component } from '@angular/core';
import { Blog } from '../types';
import { AppService } from '../app.component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styles: [],
})
export default class Home {
  blogs: Blog[] = [];
  constructor(private appService: AppService, private router: Router) {}
  ngOnInit() {
    const data = this.appService.getDataFromDb();
    if (data) {
      this.blogs = data;
    }
  }
  handleBlogDelete(id: number) {
    this.appService.deleteBlog(id);
  }
  handleBlogEdit(id: number) {
    this.router.navigate(['/create'], { state: { id } });
  }
}
