import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root',
    },
)
export class LoadingService {
 private emitChangeSource = new Subject<any>();
 private loadingSubject = new BehaviorSubject<boolean>(false);
 public changeEmitted$ = this.loadingSubject.asObservable();


 //changeEmitted$ = this.emitChangeSource.asObservable();
 emitChange(change: boolean) {
    this.loadingSubject.next(change); 
    //this.emitChangeSource.next(change);
 }
}