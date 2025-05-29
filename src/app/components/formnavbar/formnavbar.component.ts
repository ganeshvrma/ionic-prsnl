import { Component,Input, OnInit ,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service'; 
import { LocalStorageUtil } from 'src/app/shared/utils/localStorageUtil';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formnavbar',
  standalone: false,
  templateUrl: './formnavbar.component.html',
  styleUrls: ['./formnavbar.component.scss'],
   
})
export class FormnavbarComponent  implements OnInit {
   @Input() formData: any;
  @Output() submit = new EventEmitter<void>();
   form = {
    description: ''
  };
//job cate api try

  dropdownOptions: any[] = [];
  selectedJobCategory: string="";

  languageOptions:any[]=[];
  selectedLanguage:string="";

  selectedSkills: string[] = [];

  //try 
   jobForm: FormGroup;
  constructor( private fb: FormBuilder,private apiService: ApiService,
    private navCtrl: NavController)
     {this.jobForm = this.fb.group({
     jobTitle: ['', Validators.required,Validators.minLength(3)],
    jobCategory: ['', Validators.required],
  jobType: ['', Validators.required],
  positionsOpen: ['', [Validators.required, Validators.min(1)]],
  jobDescription: ['', Validators.required],
  candidatetype: ['', Validators.required],
   minexp: [''],
    maxexp: [''],
  isgender: ['', Validators.required],
  locations: ['', Validators.required],
  WorkFromHome: ['', Validators.required],
  qualification: [[], Validators.required],
  salary: ['', Validators.required],
  skills: ['', Validators.required],
  issecuritygiven: ['', Validators.required],
  language1: ['', Validators.required],
  language2: ['', Validators.required],
  jobStartTime: ['', Validators.required],
  jobEndTime: ['', Validators.required],
  interviewTime: ['', Validators.required],
  interviewDay: ['', Validators.required],
   
      
    }); }
    ngOnInit() {
     this.apiService.getJobCategory().subscribe((res: any) => {
      if (res.status === 'success') {
        this.dropdownOptions = res.data;}
      });
      this.apiService.getLanguages().subscribe((res: any) => {
      if (res.status === 'success') {
        this.languageOptions = res.data;}
      });
      this.apiService.getSkills().subscribe((res: any) => {
      if (res.status === 'success') {
        this.selectedSkills = res.data;}
      });

  }
  
  nextpg(){}
  // nextStep() {
  //   if (this.jobForm.valid) {
  //     console.log(this.jobForm.value);
  //     this.navCtrl.navigateForward(''); // Next step
  //   }
  // }
  markFormTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach(control => {
    control.markAsTouched();
  });
}

 nextStep() {
  if (true) {
     this.markFormTouched(this.jobForm);
    // console.log('Form data:', this.jobForm.value);
    this.navCtrl.navigateForward(''); // Next step
    // this.navCtrl.navigateForward('next-page'); // Replace with actual route
  } else {
    this.jobForm.markAllAsTouched();
    console.log('Form is invalid');
  }
}

submitForm() {
  if (this.jobForm.invalid) {
    this.jobForm.markAllAsTouched(); // Show validation errors
    return;
  }

  // const formData = this.jobForm.value;
const formData = {
  ...this.jobForm.value,
  step_one_data: "step one", // replace with actual step one form/control or object
  user_id: LocalStorageUtil.getItem('user_id')
};

  console.log('Submitting form:', formData);

  // Call your API service here
  this.apiService.submitJob(formData).subscribe(
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


//qualification options
// qualificationLevels: string[] = [
qualification: string[] = [

  '<10th pass',
  '10th pass ',
  'Diploma',
  '12th pass ',
  'Graduate','Post Graduate'
];

selectedQualifications: string = '';
selectQualifications(level: string) {
//   const index = this.selectedQualifications.indexOf(level);
//   if (index > -1) {
//     // Deselect
//     this.selectedQualifications.splice(index, 1);
//   } else {
//     // Select
//     this.selectedQualifications.push(level);
//   }
  this.selectedQualifications = level;
 this.jobForm.get('qualification')?.setValue(level);
  console.log("candidate location range : ",level);
}

// isSelected(level: string): boolean {
//   return this.selectedQualifications.includes(level);
  
// }

// qualificationLevels: string[] = [
//   '<10th pass',
//   '10th pass',
//   'Diploma',
//   '12th pass',
//   'Graduate',
//   'Post Graduate'
// ];

// // Selected qualification values
// selectedQualifications: string[] = [];

// // Toggle selection logic
// toggleSelection(level: string) {
//   const index = this.selectedQualifications.indexOf(level);
//   if (index > -1) {
//     // Deselect
//     this.selectedQualifications.splice(index, 1);
//   } else {
//     // Select
//     this.selectedQualifications.push(level);
//   }

//   // Update the form control with joined string (or use array if backend supports it)
//   this.jobForm.get('qualification')?.setValue(this.selectedQualifications.join(', '));
// }

// // Utility for UI toggle fill/color
// isSelected(level: string): boolean {
//   return this.selectedQualifications.includes(level);
// }
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
  // this.selectedLocation = location;
  // this.jobForm.get('selectedLocation')?.setValue(location);
  // console.log("candidate location range : ",location);
   this.selectedLocation = location;
  this.jobForm.get('locations')?.setValue(location);
  console.log('Candidate location range:', location);
}
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
   if (cantype === 'fresher') {
    this.jobForm.get('minexp')?.setValue('Fresher');
    this.jobForm.get('maxexp')?.setValue('Fresher');
    this.jobForm.get('minexp')?.disable();
    this.jobForm.get('maxexp')?.disable();
  } else {
    this.jobForm.get('minexp')?.reset();
    this.jobForm.get('maxexp')?.reset();
    this.jobForm.get('minexp')?.enable();
    this.jobForm.get('maxexp')?.enable();
  }
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