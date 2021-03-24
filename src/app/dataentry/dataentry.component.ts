import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {
  
  navLinks = [
    { path: '/home', label:'Home' },
    { path: '/setlocation', label:'Set Location' },
    { path: '/dataentry', label:'Data Entry' },
    { path: '/verification', label:'Verification' },
    { path: '/contentupload', label:'Content Upload' },
    { path: '/feedback', label:'Feedback' },
   
  ];
  links = [];
  activeLink = this.links[0];
  background = 'accent';

  constructor(private router : Router) { }

 


  
  
  ngOnInit(): void {
  }

}


