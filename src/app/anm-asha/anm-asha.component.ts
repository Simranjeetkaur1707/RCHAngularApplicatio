import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl,} from '@angular/forms'; 

interface anm{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-anm-asha',
  templateUrl: './anm-asha.component.html',
  styleUrls: ['./anm-asha.component.css']
})
export class AnmAshaComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  isEditable = false;

  anmControl = new FormControl('', Validators.required);

  constructor(private _formBuilder: FormBuilder) { }
  abpl:anm[] = [
    {value:'yes',viewValue:''},
    {value:'no',viewValue:''},
  ];

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    
  }
  }


