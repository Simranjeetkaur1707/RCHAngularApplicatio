import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { EligibleCouple } from '../eligible-couple';

@Injectable({
  providedIn: 'root'
})
export class ECServiceService {
  
  private dbPath = '/ec';
  usersRef: AngularFireList<EligibleCouple>=null;

  constructor(private fireDatabase : AngularFireDatabase ) { 
    this.usersRef = fireDatabase.list(this.dbPath);
  }

  //Crud Function
  AddUser(user:EligibleCouple):void{
    this.usersRef.push(user);
  } 

  GetECList():AngularFireList<EligibleCouple>{
    return this.usersRef;
  }

  UpdateUser(key:string,user:any): Promise<void>{
    return this.usersRef.update(key,user);
  }

  DeleteUser(key:string):Promise<void>{
    return this.usersRef.remove(key);
  }

  DeleteAll(): Promise<void>{
    return this.usersRef.remove();
  }
}
