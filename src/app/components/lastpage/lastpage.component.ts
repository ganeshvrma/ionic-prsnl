import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

}