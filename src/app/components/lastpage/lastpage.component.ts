import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service'; 
import { LocalStorageUtil } from 'src/app/shared/utils/localStorageUtil';
@Component({
  selector: 'app-lastpage',
  standalone: false,
  templateUrl: './lastpage.component.html',
  styleUrls: ['./lastpage.component.scss'],
  template: `
    <ion-card>
      <ion-card-header>Second Component</ion-card-header>
      <ion-button (click)="back.emit()">Back to First</ion-button>
     <ion-button (click)="next.emit()">Submit</ion-button>
    </ion-card>
  `
})
export class LastpageComponent  implements OnInit {
@Input() formData: any;
  @Output() prev = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

   basiclast:FormGroup;
  constructor( private fb: FormBuilder,  private navCtrl: NavController,private apiService: ApiService) {
   {this.basiclast = this.fb.group({

  emplname: ['', Validators.required],
  emplemail: ['', Validators.required],
  contactperson: ['', Validators.required],
  emplnumber: ['', Validators.required],
  
        });}}
  ngOnInit() {}
  subbmit() {
  if (this.basiclast.valid) {
    console.log('Form data:', this.basiclast.value);
    // this.navCtrl.navigateForward('next-page'); // Replace with actual route
  } else {
    this.basiclast.markAllAsTouched();
    console.log('Form is invalid');
  }
}
submitForm() {
  if (this.basiclast.invalid) {
    this.basiclast.markAllAsTouched(); // Show validation errors
    return;
  }

  // const formData = this.jobForm.value;
const formData = {
  ...this.basiclast.value,
  step_third_data: "step 3", // replace with actual step one form/control or object
  user_id: LocalStorageUtil.getItem('user_id')
};

  console.log('Submitting form:', formData);

  // Call your API service here
  this.apiService.submitBasic(formData).subscribe(
    (response:any) => {
      console.log('Success:', response);
      // Show success toast or redirect
    },
    (error:any) => {
      console.error('API Error:', error);
      // Show error toast
    }
  );
}
}