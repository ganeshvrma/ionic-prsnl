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
  @Output() next = new EventEmitter<void>();
   form = {
    description: ''
  };

   jobForm: FormGroup;
  constructor( private fb: FormBuilder,
    private navCtrl: NavController)
     {this.jobForm = this.fb.group({
     
      
    }); }

  ngOnInit() {}
  nextpg(){}
nextStep() {
    if (this.jobForm.valid) {
      console.log(this.jobForm.value);
      this.navCtrl.navigateForward(''); // Next step
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
  console.log("qualification" ,level);
}

//work from home
isWorkFromHome: string = ''; // Holds selected value ('yes' or 'no')

selectWorkType(choice: string) {
  this.isWorkFromHome = choice;
  console.log("Work from home : ", choice);
}
//gender
isgender: string = ''; // Holds selected value ('yes' or 'no')

selectgenderType(gender: string) {
  this.isgender = gender;
  console.log("Gender is: ", gender);
} 
//jobtype
jobtype: string = ''; // Holds selected value ('yes' or 'no')

selectjobType(time: string) {
  this.jobtype = time;
  console.log("Job type :", time);
} 
//location
jobLocations: string[] = [
  'Within 10 KM of my city',
  'Within my city',
  'Anywhere in India'
];
selectedLocation: string = '';
selectLocation(location: string) {
  this.selectedLocation = location;
  console.log("candidate location range : ",location);
}
//security given
issecuritygiven: string = ''; // Holds selected value ('yes' or 'no')

selectsecurity(security: string) {
  this.issecuritygiven = security;
  console.log("Security deposit :", security);
} 
//candidate type
candidatetype: string = ''; // Holds selected value ('yes' or 'no')

selectcanType(cantype: string) {
  this.candidatetype = cantype;
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