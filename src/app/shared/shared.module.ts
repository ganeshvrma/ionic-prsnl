// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormnavbarComponent } from '../components/formnavbar/formnavbar.component';
// import { MainfirstComponent } from '../components/mainfirst/mainfirst.component';


// @NgModule({
//   declarations: [
//     FormnavbarComponent,
//     MainfirstComponent
   
//   ],
//   imports: [
//     CommonModule
//   ],
//   exports: [ // export components to use in other modules
//     FormnavbarComponent,
//     MainfirstComponent
   
//   ]
// })
// export class SharedModule { }



// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // ✅ Add this line
import { ReactiveFormsModule } from '@angular/forms';

import { FormnavbarComponent } from '../components/formnavbar/formnavbar.component';
import { MainfirstComponent } from '../components/mainfirst/mainfirst.component';

@NgModule({
  declarations: [
    FormnavbarComponent,
    MainfirstComponent
  ],
  imports: [
    CommonModule,
    IonicModule ,  // ✅ Add this here
    ReactiveFormsModule, 
  ],
  exports: [
    FormnavbarComponent,
    MainfirstComponent
  ]
})
export class SharedModule { }
