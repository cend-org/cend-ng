import { Injectable } from "@angular/core";

@Injectable()
export abstract class ValidationService{
    abstract checkEmail(email: string): boolean;
}
