import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'; 

interface District {
  value: string;
  viewValue: string;
}


interface HealthBlock {

  value: string;
  viewValue: string;
}

interface HealthFacility {
  value: string;
  viewValue: string;
}


interface HealthFacility2 {
  value: string;
  viewValue: string;
}

interface SubFacility {
  value: string;
  viewValue: string;
}
interface Village{
  value: string;
  viewValue: String;
}

@Component({
  selector: 'app-setlocation',
  templateUrl: './setlocation.component.html',
  styleUrls: ['./setlocation.component.css']
})
export class SetlocationComponent implements OnInit {
  colorControl = new FormControl('accent');
  locationControl = new FormControl('', Validators.required);

 constructor(){}

  dis: District[] = [
    {value: 'Dhalai District', viewValue: 'Dhalai District'},
    {value: 'Gomati District', viewValue: 'Gomati District'},
    {value: 'Khowai District', viewValue: 'Khowai District'},
    {value: 'North District', viewValue: 'North District'},
    {value: 'Sepahijala District', viewValue: 'Sepahijala District'},
    {value: 'South District', viewValue: 'South District'},
    {value: 'Unakoti District', viewValue: 'Unakoti District'},
    {value: 'West District', viewValue: 'West District'},
    
];
health: HealthBlock[] = [
  {value: 'Select', viewValue: '--select--'},
  {value: 'Ambassa Health Sub Division', viewValue: 'Ambassa Health Sub Division'},
  {value: 'Anand Nagar', viewValue: 'Anand Nagar'},
  {value: 'Gandacherra Health Sub-Divison', viewValue: 'Gandacherra Health Sub-Divison'},
  {value: 'Ghana', viewValue: 'Ghana'},
  {value: 'Gona', viewValue: 'Gona'},
  {value: 'Jagannathpur Block', viewValue: 'Jagannathpur Block'},
  {value: 'Gandacherra Health Sub-Divison', viewValue: 'Gandacherra Health Sub-Divison'},
  {value: 'Kamalpur Health Sub-Divison', viewValue: 'Kamalpur Health Sub-Divison'},
  {value: 'Kangra', viewValue: 'Kangra'}, 
];

facility: HealthFacility[] = [
  {value: '--select--', viewValue: '--select--'},
  {value: 'Primary Health Centre(PHC)', viewValue: 'Primary Health Centre(PHC)'},
  {value: 'Community Health Centre(CHC)', viewValue: 'Community Health Centre(CHC)'},
  {value: 'Urban Health Centre(UHC)', viewValue: 'Urban Health Centre(UHC)'},
  {value: 'Sub-District Hospital(SDH)', viewValue: 'Sub-District Hospital(SDH)'},
  {value: 'District Hospital(DH)', viewValue: 'District Hospital(DH)'},
  {value: 'Civil Hospital/General Hospital(CH)', viewValue: 'Civil Hospital/General Hospital(CH)'},
  {value: 'Referral Hospital(RH)', viewValue: 'Referral Hospital(RH)'},
  {value: 'Dispensaries(DISPENSARIES)', viewValue: 'Dispensaries(DISPENSARIES)'},
  {value: 'Ayush Dispensaries(AYUSH-D)', viewValue: 'Ayush Dispensaries(AYUSH-D)'},
  {value: 'Maternity Home(MH)', viewValue: 'Maternity Home(MH)'},
  {value:'Others(Other facility)', viewValue:'Others(Other facility)'},
  {value:'Post Partum Unit(PPU)', viewValue:'Post Partum Unit(PPU)'},
  {value:'M&CW Centre(MCW)', viewValue:'M&CW Centre(MCW)'},
  {value:'Urban Health Posts(UHP)', viewValue:'Urban Health Posts(UHP)'},
  {value:'Medical College Hospital(MCH)', viewValue:'Medical College Hospital(MCH)'},
  {value:'Women Hospital(WH)', viewValue:'Women Hospital(WH)'},
  {value:'Maternity Home(MH)', viewValue:'Maternity Home(MH)'},
];

facility2: HealthFacility2[] =  [
  {value:'--select--', viewValue: '--select--'},
  {value:'Ambassa PHC', viewValue: 'Ambassa PHC'},
  {value:'Health Facility Type', viewValue: 'Health Facility Type'},
  {value:'Test Health Facility', viewValue: 'Test Health Facility'},
  {value:'Test PHC-2-6', viewValue: 'Test PHC-2-6'},
];

subfacility:SubFacility[] = [
  {value:'--select--',viewValue:'--select--'},
  {value:'Bagmara',viewValue:'Bagmara'},
  {value:'Balaram',viewValue:'Balaram'},
  {value:'Dolubari Sub-Centre',viewValue:'Dolubari Sub-Centre'},
  {value:'East Nalichara',viewValue:'East Nalichara'},
  {value:'Fuljhari',viewValue:'Fuljhari'},
  {value:'Gantachara',viewValue:'Gantachara'},
  {value:'Gurudhanpara',viewValue:'Gurudhanpara'},
  {value:'Harinchara',viewValue:'Harinchara'},
  {value:'Jagannathpura',viewValue:'Jagannathpura'},
  {value:'Jaharnagar Sub-centre',viewValue:'Jaharnagar Sub-centre'},
  {value:'Jeolchara',viewValue:'Jeolchara'},
  {value:'Kachmichara Sub-Centre',viewValue:'Kachmichara Sub-Centre'},
  {value:'Kalamchara Sub-Centre',viewValue:'Kalamchara Sub-Centre'},
  {value:'Kathalibari',viewValue:'Kathalibari'},
  {value:'Kulai',viewValue:'Kulai'},
  {value:'Kulai R-F Extension',viewValue:'Kulai R-F Extension'},
  {value:'Lalchari',viewValue:'Lalchari'},
  {value:'Masli PHC1',viewValue:'Masli PHC1'},
  {value:'North Nalichara Sub-Centre',viewValue:'North Nalichara Sub-Centre'},
];

village: Village[] = [
  {value:'--select--',viewValue:'--select--'},
  {value:'Bagmara ADC Village',viewValue:'Bagmara ADC Village'},
];
  ngOnInit(): void {
  }

}
