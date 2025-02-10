import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.services';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  totalUsers = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [3, 5, 20, 50];

  constructor(
    private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.pageSizeOptions = [3, 5, 20, 50];
    this.fetchUsers();
  }

  fetchUsers(): void {
    const offset = this.pageIndex * this.pageSize;
    this.usersService.getAllUsers(this.pageSize, offset).subscribe({
      next: (response) => {
        this.users = response.data;
        this.totalUsers = response.total;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.fetchUsers();
    this.cdr.detectChanges();
  }
}
