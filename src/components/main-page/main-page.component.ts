import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { environment } from '../../environments/environments'

@Component({
  selector: 'app-main-page',
  imports:[RouterOutlet, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  main_feed_url: string = environment.MainFeedURL;
  landing_page_url: string = environment.LandingPageURL;
  current_year: number = new Date().getFullYear();
}
