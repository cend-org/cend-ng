import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class HeaderService{
    constructor(private locaStorageService: LocalStorageService){}
    Get(): any {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.locaStorageService.get(`${environment.cend_default_lang_id}_tkn`) || ''}`.replace(/"/g, '')
          })
    }

    GetAuth(): any {
        return `Bearer ${this.locaStorageService.get(`${environment.cend_default_lang_id}_tkn`) || ''}`.replace(/"/g, '')
    }
}

