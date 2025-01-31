import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  total_users:number = 5;
  active_users:number = 4;
  inactive_users:number = 1;
  admins_number:number = 2;
  constructor(){}
}
