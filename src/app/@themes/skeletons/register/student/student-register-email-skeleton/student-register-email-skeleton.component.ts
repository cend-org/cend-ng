import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-student-register-email-skeleton',
  templateUrl: './student-register-email-skeleton.component.html',
  styleUrl: './student-register-email-skeleton.component.scss'
})
export class StudentRegisterEmailSkeletonComponent implements OnInit{
  constructor(private confirmationService: ConfirmationService) {}
  ngOnInit(): void {
    this.confirmationService.confirm({
      header: '',
      message: '',
  });
  }
}

