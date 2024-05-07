import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LangConfigService } from '../../../@core/services/lang-config.service';

@Component({
  selector: 'app-login-skeleton',
  templateUrl: './login-skeleton.component.html',
  styleUrl: './login-skeleton.component.scss'
})
export class LoginSkeletonComponent implements OnInit{
  constructor(private confirmationService: ConfirmationService, private  langCondigService: LangConfigService){}
  ngOnInit(): void {
    this.langCondigService.configure();
    this.confirmationService.confirm({
      header: '',
      message: '',
  });
  }
}
