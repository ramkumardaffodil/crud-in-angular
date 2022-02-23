import { Component } from '@angular/core';
import { Blog } from '../types';
import { Router } from '@angular/router';
import { AppService } from '../app.component.service';
@Component({
  selector: 'create-component',
  templateUrl: './create.component.html',
  styles: [],
})
export default class Create {
  model!: Blog;
  editMode: boolean = false;
  editBlogId: any;
  showBlogSubmitError: boolean = false;
  constructor(private router: Router, private appService: AppService) {}
  ngOnInit() {
    this.editBlogId = history.state.id;
    if (history.state.id) {
      const blogs = this.appService.getDataFromDb();
      const editBlog = blogs.filter((blog: any) => blog.id === this.editBlogId);
      this.model = editBlog[0];
      this.editMode = true;
    }
  }
  handleCreate(form: any) {
    if (form.valid) {
      this.appService.createBlog(this.model);
      this.model = { blogTitle: '', blogBody: '', id: 0 };
      this.router.navigate(['/home']);
    } else {
      this.showBlogSubmitError = true;
    }
  }
  handleEdit(form: any) {
    if (form.valid) {
      this.appService.editBlog(this.model, this.editBlogId);
      this.model = { blogTitle: '', blogBody: '', id: 0 };
      this.router.navigate(['/home']);
    } else {
      this.showBlogSubmitError = true;
    }
  }
}
