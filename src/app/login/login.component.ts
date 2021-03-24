import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'; 
import { Router } from '@angular/router';
interface State {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router : Router) { }

  
  selectControl = new FormControl('', Validators.required);

  colorControl = new FormControl('accent');
  user = new FormControl('', [Validators.required, Validators.email]);
  passwor = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.user.hasError('required')) {
      return 'You must enter a value';
    }

    return this.user.hasError('user') ? 'Not a valid username' : '';
    
  }


  states: State[] = [
    {value: 'Assam', viewValue: 'Assam'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'goa', viewValue: 'Goa'},
    {value:'Andaman Nicobar-UT (35)', viewValue:'Andaman Nicobar-UT (35)'}
];
  
  ngOnInit(): void {
  }

 // Button Click Event
 locationfun(){
     this.router.navigateByUrl('/dataentry');
   }
}
