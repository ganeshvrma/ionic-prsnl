import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // ✅ Add this line
import { ReactiveFormsModule } from '@angular/forms';

import { FormnavbarComponent } from '../components/formnavbar/formnavbar.component';
import { MainfirstComponent } from '../components/mainfirst/mainfirst.component';
import {LastpageComponent} from '../components/lastpage/lastpage.component';

@NgModule({
  declarations: [
    FormnavbarComponent,
    MainfirstComponent,
    LastpageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule ,  // ✅ Add this here
    ReactiveFormsModule, 
  ],
  exports: [
    FormnavbarComponent,
    MainfirstComponent,
    LastpageComponent
  ]
})
export class SharedModule { }