import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { EcComponent } from './ec/ec.component';
import { SetlocationComponent } from './setlocation/setlocation.component'; 
import { DataentryComponent } from './dataentry/dataentry.component';
import { AnmAshaComponent } from './anm-asha/anm-asha.component'; 
import { AshaComponent } from './asha/asha.component'; 
import { PhoneDirective } from './validator/phone.directive';
import { FooterComponent } from './footer/footer.component'; 
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './user-service';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';  
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from "@angular/common/http";
import { ECServiceService } from './services/ecservice.service';
import { EcdisplayComponent } from './ecdisplay/ecdisplay.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database/database';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EcaddComponent } from './ecadd/ecadd.component';
 
@NgModule({
declarations: [
    AppComponent,
    LoginComponent,
    SetlocationComponent,
    DataentryComponent,
    HeaderComponent,
    EcComponent,
    AnmAshaComponent,
    AshaComponent,
    PhoneDirective,
    FooterComponent,
    EcdisplayComponent,
    EcaddComponent,
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule ,
    MatIconModule ,
    MatGridListModule ,
    MatTabsModule,
    MatExpansionModule,  
    MatDividerModule,
    MatSidenavModule,
    MatStepperModule,
    MatTreeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [
   // UserService
   ECServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
