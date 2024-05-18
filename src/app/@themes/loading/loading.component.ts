import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { LangConfigService } from '../../@core/services/lang-config.service';
import { LoadingService } from '../../@core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit{
  constructor(
    private confirmationService: ConfirmationService, 
    private  langCondigService: LangConfigService,
    public loadingService: LoadingService
  ) {
    this.langCondigService.configure();
  }

  ngOnInit(): void {
    this.confirmationService.confirm({
      header: '',
      message: '',
  });
  }
}
