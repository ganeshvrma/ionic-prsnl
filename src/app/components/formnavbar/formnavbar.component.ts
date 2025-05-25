import { Component,Input, OnInit ,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

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
  @Output() submit = new EventEmitter<void>();
   form = {
    description: ''
  };

   jobForm: FormGroup;
  constructor( private fb: FormBuilder,
    private navCtrl: NavController)
     {this.jobForm = this.fb.group({
     jobTitle: ['', Validators.required,Validators.minLength(3)],
    jobCategory: ['', Validators.required],
  jobType: ['', Validators.required],
  positionsOpen: ['', [Validators.required, Validators.min(1)]],
  jobDescription: ['', Validators.required],
  candidatetype: ['', Validators.required],
  isgender: ['', Validators.required],
  locations: ['', Validators.required],
  WorkFromHome: ['', Validators.required],
  qualification: ['', Validators.required],
  salary: ['', Validators.required],
  skills: ['', Validators.required],
  issecuritygiven: ['', Validators.required],
  language1: ['', Validators.required],
  language2: ['', Validators.required],
  jobStartTime: ['', Validators.required],
  jobEndTime: ['', Validators.required],
  interviewTime: ['', Validators.required],
  interviewDay: ['', Validators.required]
      
    }); }

  ngOnInit() {}
  nextpg(){}
  // nextStep() {
  //   if (this.jobForm.valid) {
  //     console.log(this.jobForm.value);
  //     this.navCtrl.navigateForward(''); // Next step
  //   }
  // }
 nextStep() {
  if (this.jobForm.valid) {
    console.log('Form data:', this.jobForm.value);
    // this.navCtrl.navigateForward('next-page'); // Replace with actual route
  } else {
    this.jobForm.markAllAsTouched();
    console.log('Form is invalid');
  }
}

//qualification options
qualificationLevels: string[] = [
  '<10th pass',
  '10th pass ',
  'Diploma',
  '12th pass ',
  'Graduate','Post Graduate'
];
selectedQualifications: string[] = [];
toggleSelection(level: string) {
  const index = this.selectedQualifications.indexOf(level);
  if (index > -1) {
    // Deselect
    this.selectedQualifications.splice(index, 1);
  } else {
    // Select
    this.selectedQualifications.push(level);
  }
}
isSelected(level: string): boolean {
  return this.selectedQualifications.includes(level); 
}
//work from home
WorkFromHome: string = ''; // Holds selected value ('yes' or 'no')
selectWorkType(choice: string) {
  this.WorkFromHome = choice;
  this.jobForm.get('WorkFromHome')?.setValue(choice);
  console.log("Work from home : ", choice);
}
//gender
isgender: string = ''; // Holds selected value ('yes' or 'no')

selectgenderType(gender: string) {
  this.isgender = gender;
  this.jobForm.get('isgender')?.setValue(gender);
  console.log("Gender is: ", gender);
} 
//jobtype
jobtype: string = ''; // Holds selected value ('yes' or 'no')

selectjobType(time: string) {
  this.jobtype = time;
  this.jobForm.get('jobType')?.setValue(time);
  console.log("Job type :", time);
} 
//location
locations: string[] = [
  'Within 10 KM of my city',
  'Within my city',
  'Anywhere in India'
];
selectedLocation: string = '';
selectLocation(location: string) {
  this.selectedLocation = location;
  this.jobForm.get('selectedLocation')?.setValue(location);
  console.log("candidate location range : ",location);
}
// Available location options
// locations: string[] = [
//   'Within 10 KM of my city',
//   'Within my city',
//   'Anywhere in India'
// ];

// // Selected value
// selectedLocation: string = '';

// // Handler for toggle buttons
// selectLocation(location: string) {
//   this.selectedLocation = location;
//   this.jobForm.get('locations')?.setValue(location);
//   console.log('Candidate location range:', location);
// }
//security given
issecuritygiven: string = ''; // Holds selected value ('yes' or 'no')
selectsecurity(security: string) {
  this.issecuritygiven = security;
  this.jobForm.get('issecuritygiven')?.setValue(security);
  console.log("Security deposit :", security);
} 
//candidate type
candidatetype: string = ''; // Holds selected value ('yes' or 'no')
selectcanType(cantype: string) {
  this.candidatetype = cantype;
  this.jobForm.get('candidatetype')?.setValue(cantype);
  console.log( "candidate type :",cantype);
} 
 //candidate type ends
  handlerequirement(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  }
  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  }
 
}