import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
//import { EligibleCouple } from '../interface/eligible-couple';
import { ECServiceService } from '../services/ecservice.service';
import { HttpClient } from '@angular/common/http';
import { EligibleCouple } from 'src/app/eligible-couple';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid);
  }
}
interface EC{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ec',
  templateUrl: './ec.component.html',
  styleUrls: ['./ec.component.css'],
  
})
export class EcComponent implements OnInit {

eligiblecouple=new EligibleCouple();

// disabling of Husband's name 
SERVER_URL = "http://localhost:4100/getall";
emailForm: FormGroup;
disableSelect = new FormControl(false);
url: string = 'student';
  title = 'Spring Boot + Angular 8 CRUD Example';

 // usersList: Array<EligibleCouple>
 // eligiblecouple: EligibleCouple = undefined
  myForm: FormGroup;

age(){
   var diff=this.CAWControl.value - this.AMWControl.value;
  this.AMHControl.setValue(this.CAHControl.value-diff);
  console.log("Women Age : "  + this.CAWControl.value);
  console.log("Women Marriage Age : "  + this.AMWControl.value);
  console.log("Husband Age : "  + this.CAHControl.value);

}

constructor(private router : Router,private ecService: ECServiceService,private formBuilder: FormBuilder, private httpClient: HttpClient) {}
  

  panelOpenState = false;
  hide = true;

  
  selectstate = new FormControl('', Validators.required);

  colorControl = new FormControl('accent');
  user = new FormControl('', [Validators.required, Validators.email]);
  passwor = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.user.hasError('required')) {
      return 'You must enter a value';
    }

    return this.user.hasError('user') ? 'Not a valid username' : '';
    
  }

 
  selectFormControl = new FormControl('', Validators.required);
  ECcontrol = new FormControl('', Validators.required);

CAWControl = new FormControl('', Validators.required);
AMWControl = new FormControl('', Validators.required);
CAHControl = new FormControl('', Validators.required);
AMHControl = new FormControl('', Validators.required);

HCBox = new FormControl('', Validators.required);
HCDisabled=false;
HCBoxFilter(){
  if(this.HCBox.value==true)
    this.Hdis.disable();
  else
    this.Hdis.enable();
    
}
Hdis = new FormControl('', Validators.required);


 
  hprovider: EC[] = [
    {value:'test(29203', viewValue:'test(29203'},
    {value:'MOHAN MUNDA', viewValue:'MOHAN MUNDA'},
    

  ]; 
  asha: EC[] = [
    {value:'Not Available', viewValue:'Not Available'},
    {value:'test ggg asha(29191)', viewValue:'test ggg asha(29191)'},
  
  ];
bank: EC[] = [
    {value:'AB BANK LIMITED', viewValue:'AB BANK LIMITED'},
    {value:'ABHINANDAN URBAN CO-OP.BK.LTD.AMARAVATI', viewValue:'ABHINANDAN URBAN CO-OP.BK.LTD.AMARAVATI'},
    {value:'ABHINAV SAHAKARI BANK LT DEOLALI PRAVARA', viewValue:'ABHINAV SAHAKARI BANK LT DEOLALI PRAVARA'},
    {value:'ABHINAV SAHAKARI BANK LTD.', viewValue:'ABHINAV SAHAKARI BANK LTD.'},
    {value:'ABHIVRIDDHI MAHILA SAH BANK NIYAMITA', viewValue:'ABHIVRIDDHI MAHILA SAH BANK NIYAMITA'},
    {value:'ABHYUDAYA CO-OP BANK LTD', viewValue:'ABHYUDAYA CO-OP BANK LTD'},
    {value:'ABHYUDAYA MAHILA U.CO.BK.LT.CHANNAPATNA', viewValue:'ABHYUDAYA MAHILA U.CO.BK.LT.CHANNAPATNA'},
    {value:'B.K.CO-OP BANK LTD BANGLORE', viewValue:'B.K.CO-OP BANK LTD BANGLORE'},
    {value:'B.KOMARAPALAYAM CO-OP.URBAN BANK LTD.', viewValue:'B.KOMARAPALAYAM CO-OP.URBAN BANK LTD.'},
    {value:'BABRA NAGRIK SAHAKARI BANK LTD.', viewValue:'BABRA NAGRIK SAHAKARI BANK LTD.'},
    {value:'BAILHONGAL MERCHANTS CO-OP.BANK LTD.', viewValue:'BAILHONGAL MERCHANTS CO-OP.BANK LTD.'},
    {value:'BALAGERIA CENTRAL CO-OP.BANK LTD.', viewValue:'BALAGERIA CENTRAL CO-OP.BANK LTD.'},
    {value:'BANK OF AMERICA', viewValue:'BANK OF AMERICA'},
    {value:'BANK OF BAHRAIN AND KUWAIT', viewValue:'BANK OF BAHRAIN AND KUWAIT'},
    {value:'BANK OF BARODA', viewValue:'BANK OF BARODA'},
    {value:'BANK OF INDIA', viewValue:'BANK OF INDIA'},
    {value:'BANK OF MAHARASHTRA', viewValue:'BANK OF MAHARASHTRA'},
    {value:'CITI BANK N.A', viewValue:'CITI BANK N.A'},
    {value:'CITI CO-OPERATIVE BANK LTD.AHEMADABAD', viewValue:'CITI CO-OPERATIVE BANK LTD.AHEMADABAD'},
    {value:'CITIZEN URBAN COOP BANK LTD JALANDHAR', viewValue:'CITIZEN URBAN COOP BANK LTD JALANDHAR'},
    {value:'CITY CO-OP.BANK LTD.(BOMBAY)', viewValue:'CITY CO-OP.BANK LTD.(BOMBAY)'},
    {value:'CITY UNION BANK LTD', viewValue:'CITY UNION BANK LTD'},
    {value:'CO-OP URBAN BANK LTD.', viewValue:'CO-OP URBAN BANK LTD.'},
    {value:'DHARMAPURI CO-OP.TOWN BANK LTD.', viewValue:'DHARMAPURI CO-OP.TOWN BANK LTD.'},
    {value:'DHARMAVARAM CO-OP.TOWN BANK LTD.', viewValue:'DHARMAVARAM CO-OP.TOWN BANK LTD.'},
    {value:'DHOLPUR SAHAKARI BHOOMI VIKAS BANK LTD.', viewValue:'DHOLPUR SAHAKARI BHOOMI VIKAS BANK LTD.'},
    {value:'', viewValue:''},
  ];

adhar:EC[] = [
  {value:'No',viewValue:'No'},
  {value:'Yes',viewValue:'Yes'},

];
wNumber:EC[] = [
  {value:'--Select--',viewValue:'--Select--'},
  {value:'Woman',viewValue:'Woman'},
  {value:'Husband',viewValue:'Husband'},
  {value:'Neighbour',viewValue:'Neighbour'},
  {value:'Relative',viewValue:'Relative'},
  {value:'Others',viewValue:'Others'},
 
]
financeYear:EC[] = [
 

]
caste:EC[] = [
  {value:'ST',viewValue:'Sc'},
  {value:'ST',viewValue:'ST'},
  {value:'Others',viewValue:'others'},
];

religion:EC[] = [
  {value:'Christian',viewValue:''},
  {value:'Hindu',viewValue:''},
  {value:'Muslim',viewValue:''},
  {value:'Sikh',viewValue:''},
  {value:'Other',viewValue:''},
  
];

male:EC[] = [
  {value:'0',viewValue:''},
  {value:'1',viewValue:''},
  {value:'2',viewValue:''},
  {value:'3',viewValue:''},
  {value:'4',viewValue:''},
  {value:'5',viewValue:''},
  {value:'6',viewValue:''},
  {value:'7',viewValue:''},
  {value:'8',viewValue:''},
  {value:'9',viewValue:''},
  {value:'10',viewValue:''},
  {value:'11',viewValue:''},
  {value:'12',viewValue:''},
  {value:'13',viewValue:''},
  {value:'14',viewValue:''},
  {value:'15',viewValue:''},
  {value:'',viewValue:''},
];
female:EC[] = [
  {value:'0',viewValue:''},
  {value:'1',viewValue:''},
  {value:'2',viewValue:''},
  {value:'3',viewValue:''},
  {value:'4',viewValue:''},
  {value:'5',viewValue:''},
  {value:'6',viewValue:''},
  {value:'7',viewValue:''},
  {value:'8',viewValue:''},
  {value:'9',viewValue:''},
  {value:'10',viewValue:''},
  {value:'11',viewValue:''},
  {value:'12',viewValue:''},
  {value:'13',viewValue:''},
  {value:'14',viewValue:''},
  {value:'15',viewValue:''},
  {value:'',viewValue:''},
];
YChild:EC[] = [
  {value:'0',viewValue:''},
  {value:'1',viewValue:''},
  {value:'2',viewValue:''},
  {value:'3',viewValue:''},
  {value:'4',viewValue:''},
  {value:'5',viewValue:''},
  {value:'6',viewValue:''},
  {value:'7',viewValue:''},
  {value:'8',viewValue:''},
  {value:'9',viewValue:''},
  {value:'10',viewValue:''},
  {value:'11',viewValue:''},
  {value:'12',viewValue:''},
  {value:'13',viewValue:''},
  {value:'14',viewValue:''},
  {value:'15',viewValue:''},
  {value:'16',viewValue:''},
  {value:'17',viewValue:''},
  {value:'18',viewValue:''},
  {value:'19',viewValue:''},
  {value:'20',viewValue:''},
  {value:'21',viewValue:''},
  {value:'22',viewValue:''},
  {value:'23',viewValue:''},
  {value:'24',viewValue:''},
  {value:'25',viewValue:''},
  {value:'26',viewValue:''},
  {value:'27',viewValue:''},
  {value:'28',viewValue:''},
  {value:'29',viewValue:''},
  {value:'30',viewValue:''},
  {value:'',viewValue:''},
  {value:'',viewValue:''},
  {value:'',viewValue:''},

];
YMChild:EC[] = [
  {value:'0',viewValue:''},
  {value:'1',viewValue:''},
  {value:'2',viewValue:''},
  {value:'3',viewValue:''},
  {value:'4',viewValue:''},
  {value:'5',viewValue:''},
  {value:'6',viewValue:''},
  {value:'7',viewValue:''},
  {value:'8',viewValue:''},
  {value:'9',viewValue:''},
  {value:'10',viewValue:''},
  {value:'11',viewValue:''},
];
abpl:EC[] = [
  {value:'yes',viewValue:''},
  {value:'no',viewValue:''},
];
infertile:EC[] = [
  {value:'yes',viewValue:''},
  {value:'no',viewValue:''},
];
refer:EC[] = [
  {value:'yes',viewValue:''},
  {value:'no',viewValue:''},
];
male2:EC[] = [
  {value:'0',viewValue:''},
  {value:'1',viewValue:''},
  {value:'2',viewValue:''},
  {value:'3',viewValue:''},
  {value:'4',viewValue:''},
  {value:'5',viewValue:''},
  {value:'6',viewValue:''},
  {value:'7',viewValue:''},
  {value:'8',viewValue:''},
  {value:'9',viewValue:''},
  {value:'10',viewValue:''},
  {value:'11',viewValue:''},
  {value:'12',viewValue:''},
  {value:'13',viewValue:''},
  {value:'14',viewValue:''},
  {value:'15',viewValue:''},
  {value:'',viewValue:''},
];
female2:EC[] = [
  {value:'0',viewValue:''},
  {value:'1',viewValue:''},
  {value:'2',viewValue:''},
  {value:'3',viewValue:''},
  {value:'4',viewValue:''},
  {value:'5',viewValue:''},
  {value:'6',viewValue:''},
  {value:'7',viewValue:''},
  {value:'8',viewValue:''},
  {value:'9',viewValue:''},
  {value:'10',viewValue:''},
  {value:'11',viewValue:''},
  {value:'12',viewValue:''},
  {value:'13',viewValue:''},
  {value:'14',viewValue:''},
  {value:'15',viewValue:''},
  
];
sex:EC[] = [
  {value:'Male',viewValue:''},
  {value:'Female',viewValue:''},
  {value:'other',viewValue:''},
];
  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email:new FormControl('', [Validators.email]),
      name:new FormControl('', []),
      PhoneNumber:new FormControl('',[Validators.pattern('[6-9]\\d{9}')]),
      radioGroup:new FormControl('',[Validators.required])
    });
  //  this.getData();
  }
  matcher = new MyErrorStateMatcher();
    

 // Button Click Event
 locationfun(){
     this.router.navigateByUrl('/dataentry');

   }
healthprovider(){
 // console.log(this.ECcontrol.value);
}
/*public submitForm(data: FormGroup) {
  if (data.valid)
   this.addStudent(data.value)
}

getData(): void {
  this.ecService.get(this.url).subscribe(res => {
    let response = JSON.parse(JSON.stringify(res))
    this.usersList = response.data
  })
}

/*addStudent(eligiblecouple: EligibleCouple): void {
  if (this.eligiblecouple)
    eligiblecouple.id = this.eligiblecouple.id
  this.ecService.post(this.url, eligiblecouple).subscribe(res => {
    let response = JSON.parse(JSON.stringify(res))
    this.getData()
    this.myForm.reset()
    this.eligiblecouple = undefined
  }, error => {
  })
}

edit(student: EligibleCouple): void {
  this.eligiblecouple = student
  this.myForm.controls['Healthprovidername'].setValue(this.eligiblecouple.HealthProviderName)
  this.myForm.controls['WomenName'].setValue(this.eligiblecouple.WomenName)
  this.myForm.controls['HusbandName'].setValue(this.eligiblecouple.HusbandName)
}

delete(eligiblecouple: EligibleCouple): void {
  this.ecService.delete(this.url, eligiblecouple).subscribe(res => {
    let data = JSON.parse(JSON.stringify(res))
    this.getData()
  }, error => {
  })
}*/ 
onSubmit(){
  const formData = new FormData();
  formData.getAll(this.myForm.get('hpname').value);

  this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );
}
  }


