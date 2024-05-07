import { Injectable } from "@angular/core";
import { LocalStorageService } from "../@core/services/local-storage.service";
import { ValidationService } from "../@core/services/validation.service";

@Injectable()
export class ApiValidationService extends ValidationService{
    override checkEmail(email: string): boolean {
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }  
}