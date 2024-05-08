import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { LangConfigService } from '../../@core/services/lang-config.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  constructor(
    private confirmationService: ConfirmationService, 
    private  langCondigService: LangConfigService,
  ) {}
  ngOnInit(): void {
    this.langCondigService.configure();
    this.confirmationService.confirm({
      header: '',
      message: '',
  });
  }
}
