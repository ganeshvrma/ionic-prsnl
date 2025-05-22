import { Component,Input, OnInit ,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

interface Jobtype {
  id: number;
  name: string;
  type: string;
}
@Component({
  selector: 'app-formnavbar',
  standalone: false,
  templateUrl: './formnavbar.component.html',
  styleUrls: ['./formnavbar.component.scss'],
   template: `
    <ion-card>
      <ion-card-header>First Component</ion-card-header>
      <ion-button (click)="next.emit()">Go to Second</ion-button>
    </ion-card>
  `
})
export class FormnavbarComponent  implements OnInit {
   @Input() formData: any;
  @Output() next = new EventEmitter<void>();
   form = {
    description: ''
  };

   jobForm: FormGroup;
  constructor( private fb: FormBuilder,
    private navCtrl: NavController)
     {this.jobForm = this.fb.group({
      jobtitle: ['', Validators.required],
      // jobRole: [{ value: 'Software Development', disabled: true }, Validators.required],
      city: ['', Validators.required],
      // locality: ['', Validators.required],
      // salaryFrom: ['', [Validators.required, Validators.min(1)]],
      // salaryTo: ['', [Validators.required, Validators.min(1)]],
      // bonus: ['no']
    }); }

  ngOnInit() {}
  nextpg(){}
nextStep() {
    if (this.jobForm.valid) {
      console.log(this.jobForm.value);
      this.navCtrl.navigateForward(''); // Next step
    }
  }
  jobtypes: Jobtype[] = [
    {
      id: 1,
      name: 'Full-time',
      type: 'jobtype',
    },
    {
      id: 2,
      name: 'Part-time',
      type: 'jobtype',
    },
    
  ];

  compareWith(o1: Jobtype, o2: Jobtype): boolean {
    return o1.id === o2.id;
  }
  handlerequirement(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  }
  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  }
  experienceType: string = '';
  minExperience: string = '';
  maxExperience: string = '';
  isFresher: boolean = false;

  // onExperienceChange() {
  //   if (this.experienceType === 'fresher') {
  //     this.minExperience = 'Fresher';
  //     this.maxExperience = 'Fresher';
  //     this.isFresher = true;
  //   } else {
  //     this.minExperience = '';
  //     this.maxExperience = '';
  //     this.isFresher = false;
  //   }
  // }
  gender = {
    female: false,
    male: false,
    other: false
  };

  location = {
    km10: false,
    myCity: false,
    india: false
  };
}