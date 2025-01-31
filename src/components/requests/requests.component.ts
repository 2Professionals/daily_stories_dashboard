import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  imports: [],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  pendingRequests:number = 5;
  approvedRequests:number = 2;
  rejectedRequests:number = 1;
  constructor(){}
}
