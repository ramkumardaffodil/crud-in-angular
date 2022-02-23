import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getBlogFromLocalStorage() {
    return localStorage.getItem('blogs');
  }
  setBlogInLocalStorage(data: any) {
    localStorage.setItem('blogs', JSON.stringify(data));
  }
  getDataFromDb() {
    const blogs = this.getBlogFromLocalStorage();
    if (blogs) {
      return JSON.parse(blogs);
    }
    return null;
  }
  createBlog(blog: any) {
    let blogs = this.getDataFromDb();
    if (blogs) {
      blog.id = new Date().getTime();
      blogs = [...blogs, blog];
      this.setBlogInLocalStorage(blogs);
    } else {
      blog.id = new Date().getTime();
      this.setBlogInLocalStorage([blog]);
    }
  }
  registerUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  deleteBlog(id: number) {
    let blogs = this.getDataFromDb();
    blogs = blogs.filter((blog: any) => blog.id !== id);
    this.setBlogInLocalStorage(blogs);
    window.location.reload();
  }
  editBlog(blog: any, id: number) {
    let blogs = this.getDataFromDb();
    let editBlogIndex = blogs.findIndex((blog: any) => blog.id === id);
    blogs[editBlogIndex] = blog;
    this.setBlogInLocalStorage(blogs);
  }
}
