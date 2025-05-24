import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
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
  constructor( private fb: FormBuilder,  private navCtrl: NavController) {
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
}