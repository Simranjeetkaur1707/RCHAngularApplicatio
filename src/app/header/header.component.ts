import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
//import { UserService } from '../user-service';
//import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent   {

 /* mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

  isValidFormSubmitted = false;
  validateEmail = true;
  user = new User();

  constructor(private userService: UserService) {
  }
 
  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    this.user = form.value;
    this.userService.createUser(this.user);
    this.user = new User();
    form.resetForm();
 }

}*/
ngOnInit(): void {
    
}
}
