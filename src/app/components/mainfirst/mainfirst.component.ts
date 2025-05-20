import { Component, Input,OnInit ,Output,EventEmitter} from '@angular/core';

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
  @Output() next = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {}

}