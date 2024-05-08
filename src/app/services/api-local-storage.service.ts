import { Injectable } from "@angular/core";
import { LocalStorageService } from "../@core/services/local-storage.service";
import { environment } from "../environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class ApiLocalStorageService extends LocalStorageService {
    override save(key: string, value: any) {
        if(typeof localStorage != 'undefined'){
            localStorage.setItem(key, JSON.stringify(value));
        }
        
    }
    override get(key: string): any {
        if(typeof localStorage != 'undefined'){
            return localStorage.getItem(key);
        } 
        return '';
    }
    override remove(key: string) {
        if(typeof localStorage != 'undefined'){
            return localStorage.removeItem(key);
        } 
    }
    override decode(item: string): number {
        const local_key: string = `${environment.cend_default_lang_id}_tkn`;
        let token = JSON.parse(this.get(local_key));
        let data = this.jwtHelperService.decodeToken(token)['data'];
        let param = JSON.parse(data)[item];
        return param? param: '';
    }

    constructor(
        private jwtHelperService: JwtHelperService
    ){
        super();
    }
    
}