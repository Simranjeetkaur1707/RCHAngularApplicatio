import { Component, OnInit } from '@angular/core';
import { ECServiceService } from '../services/ecservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ecdisplay',
  templateUrl: './ecdisplay.component.html',
  styleUrls: ['./ecdisplay.component.css']
})
export class EcdisplayComponent implements OnInit {
  
  ECs:any;

  constructor(private ECService:ECServiceService) { }
  
  GetEC():void{
    this.ECService.GetECList().snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
    ).subscribe(ECs=>{
      this.ECs=ECs;
    }); 
  }

    
  ngOnInit(): void {
    this.GetEC();
  }
}

