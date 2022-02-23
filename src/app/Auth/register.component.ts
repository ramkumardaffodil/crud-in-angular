import { Component } from '@angular/core';
import { AppService } from '../app.component.service';
import { User } from '../types';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styles: [],
})
export default class Register {
  showError = false;
  model!: User;
  constructor(private appService: AppService) {}
  ngOnInit() {}
  handleSubmit(form: any) {
    if (form.valid) {
      const data: User = this.model;
      this.appService.registerUser(data);
      window.location.reload();
    } else {
      this.showError = true;
    }
  }
}
