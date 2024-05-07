import { Injectable } from "@angular/core";
import { LocalStorageService } from "../@core/services/local-storage.service";
import { LangConfigService } from "../@core/services/lang-config.service";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "../environments/environment";

@Injectable()
export class LocalLangConfigService implements LangConfigService{
    constructor(
        private translateService: TranslateService, 
        private localStorageService: LocalStorageService
    ){}
    configure(): void {
        let currentLang = this.localStorageService.get(`${environment.cend_default_lang_id}_lang`) || 'fr';
        this.translateService.setDefaultLang(currentLang);
        this.translateService.use(currentLang);
    }
}