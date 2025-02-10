import { Component, OnInit } from '@angular/core';
import { MainStatisticsService } from '../../services/main-statistics.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  total_users: number = 5;
  active_users: number = 4;
  inactive_users: number = 1;
  admins_count: number = 2;

  constructor(private mainStatsService: MainStatisticsService) {}

  ngOnInit(): void {
    this.mainStatsService.getUsersStatistics().subscribe({
      next: (response) => {
        this.total_users = response.data.total_users;
        this.active_users = response.data.active_users;
        this.inactive_users = response.data.inactive_users;
        this.admins_count = response.data.admins_count;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
}
