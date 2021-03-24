import { Component, OnInit } from '@angular/core';
import { Validators ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';


interface asha{
  value: string;
  viewValue: string;
}

interface anm{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-asha',
  templateUrl: './asha.component.html',
  styleUrls: ['./asha.component.css']
})
export class AshaComponent implements OnInit {
 

  panelOpenState = false;
  hide = true;
  constructor(private router : Router) { }

  disableSelect = new FormControl(false);

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
  ashaControl = new FormControl('', Validators.required);

  abpl:anm[] = [
    {value:'yes',viewValue:''},
    {value:'no',viewValue:''},
  ];
  
  hprovider: asha[] = [
    {value:'test(29203', viewValue:'test(29203'},
    {value:'MOHAN MUNDA', viewValue:'MOHAN MUNDA'},
  ];
  status: asha[] = [
    {value:'ALL', viewValue:''},
    {value:'ACTIVE', viewValue:''},
    {value:'IN ACTIVE', viewValue:''},
  ];
  
  active: asha[] = [
    {value:'Yes', viewValue:''},
    {value:'No', viewValue:''},
  ];
  designation: asha[] = [
    {value:'ASHA', viewValue:''},
    {value:'ANM', viewValue:''},
    {value:'ANM 2', viewValue:''},
    {value:'LINK WORKER', viewValue:''},
    {value:'MPW', viewValue:''},
    {value:'GNM', viewValue:''},
    {value:'CHV', viewValue:''},
    {value:'AWW', viewValue:''},
  ]; 
  process: asha[] = [
    {value:'Reallocate', viewValue:''},
    {value:'Deactivate/Activate', viewValue:''},
    {value:'Link', viewValue:''},
    {value:'Delink', viewValue:''},

  ];
  
  village: asha[] = [   
  {value:'Bagmara ADC Village (10000564)* (10000564) ', viewValue:''},
  ];
  
  option: asha[] = [   
    {value:'', viewValue:''},
    ];
  
  telecom: asha[] = [
    {value:'idea', viewValue:''},
    {value:'airtel', viewValue:''},
    {value:'reliance jio', viewValue:''},
    {value:'BSNL', viewValue:''},
    {value:'vodafone', viewValue:''},
    {value:'Aircel', viewValue:''},
    {value:'Airtel', viewValue:''},
    {value:'MTNL-C', viewValue:''},
    {value:'MTNL-D', viewValue:''},
    {value:'MTS', viewValue:''},
    {value:'Tata-G ', viewValue:''},
  ];

  sex: asha[] = [
    {value:'Female', viewValue:''},
    {value:'Male', viewValue:''},
  ];
  subfacility:asha[] = [
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
  
  bank: asha[] = [
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

  ngOnInit(): void {
    
}
}