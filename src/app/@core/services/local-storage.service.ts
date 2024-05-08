import { Injectable } from "@angular/core";

@Injectable()
export abstract class LocalStorageService{
    abstract save(key: string, value: any): void;
    abstract get(key: string): any;
    abstract remove(key: string): void;
    abstract decode(item:string): any;
}

