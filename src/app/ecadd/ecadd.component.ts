import { Component, OnInit } from '@angular/core';
import { ECServiceService } from '../services/ecservice.service';
import { EligibleCouple } from 'src/app/eligible-couple';


interface EC{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ecadd',
  templateUrl: './ecadd.component.html',
  styleUrls: ['./ecadd.component.css']
})
export class EcaddComponent implements OnInit {

  constructor(private ecService: ECServiceService) { }
  eligiblecouple=new EligibleCouple();
  autoId:number=1;

  hprovider: EC[] = [
    {value:'test(29203', viewValue:'test(29203'},
    {value:'MOHAN MUNDA', viewValue:'MOHAN MUNDA'},
    

  ]; 
  
addEC(){
  this.eligiblecouple.RchID = this.autoId;
    console.log(this.eligiblecouple);      
    this.ecService.AddUser(this.eligiblecouple);
  }  
  ngOnInit(): void {
  }

}
 