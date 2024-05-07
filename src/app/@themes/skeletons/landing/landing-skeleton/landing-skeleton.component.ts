import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { LangConfigService } from '../../../../@core/services/lang-config.service';

@Component({
  selector: 'app-landing-skeleton',
  templateUrl: './landing-skeleton.component.html',
  styleUrl: './landing-skeleton.component.scss'
})
export class LandingSkeletonComponent {
  constructor(private confirmationService: ConfirmationService, private  langCondigService: LangConfigService){}
  ngOnInit(): void {
    this.langCondigService.configure();
    this.confirmationService.confirm({
      header: '',
      message: '',
  });
  }
}