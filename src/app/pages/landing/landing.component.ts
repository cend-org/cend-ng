import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../../@core/services/local-storage.service';
import { LangConfigService } from '../../@core/services/lang-config.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit { 
  loading: boolean = true;
  constructor(
       private  langCondigService: LangConfigService
    ){this.loading = true;}

  ngOnInit(): void {
    this.SetLang();
  }
  
  SetLang(): void {
    this.langCondigService.configure();
    this.loading = false;
  }
}
