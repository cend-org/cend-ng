import { Injectable } from "@angular/core";
import { LocalStorageService } from "../@core/services/local-storage.service";

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
    override decode(key: string, item: string) {
        throw new Error("Method not implemented.");
    }
    
}