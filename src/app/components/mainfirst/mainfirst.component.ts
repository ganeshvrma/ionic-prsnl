import { Component, Input,OnInit ,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mainfirst',
  standalone: false,
  templateUrl: './mainfirst.component.html',
  styleUrls: ['./mainfirst.component.scss'],
   template: `
    <ion-card>
      <ion-card-header>Second Component</ion-card-header>
      <ion-button (click)="back.emit()">Back to First</ion-button>
    </ion-card>
  `
})
export class MainfirstComponent  implements OnInit {
  @Input() formData: any;
  @Output() prev = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
   company:FormGroup;
  constructor( private fb: FormBuilder,  private navCtrl: NavController) {
   {this.company = this.fb.group({

  companyname: ['', Validators.required],
  companyaddress: ['', Validators.required],
  companystate: ['', Validators.required],
  companycity: ['', Validators.required],
  companycountry: ['', Validators.required],
  companywebsite: ['', Validators.required],
  companydesc: ['', Validators.required],
  industrytype: ['', Validators.required],
  numemployees: ['', Validators.required],
  companyestb: ['', Validators.required],

 
        });}}

  ngOnInit() {}

      nextStep2() {
  if (this.company.valid) {
    console.log('Form data:', this.company.value);
    // this.navCtrl.navigateForward('next-page'); // Replace with actual route
  } else {
    this.company.markAllAsTouched();
    console.log('Form is invalid');
  }
}

    }