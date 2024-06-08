import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../../@core/services/local-storage.service';
import { LangConfigService } from '../../@core/services/lang-config.service';
import { LoadingService } from '../../@core/services/loading.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, AfterViewInit { 
  loading: boolean = true;
  constructor(
       private  langCondigService: LangConfigService, 
       private loadingService: LoadingService,
    ){this.loading = true;}

  ngOnInit(): void {
    this.SetLang();
  }
  
  SetLang(): void {
    this.langCondigService.configure();
    this.loading = false;
  }
  ngAfterViewInit(){
    this.loadingService.emitChange(false);
  }
}
