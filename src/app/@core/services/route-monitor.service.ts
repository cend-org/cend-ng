import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class RouteMonitorService {

  constructor(private router: Router, private loadingService: LoadingService) {
    this.monitorRouteChanges();
  }

  private monitorRouteChanges() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.emitChange(true);
      } else if (event instanceof NavigationEnd) {
        this.loadingService.emitChange(false);
      } else if (event instanceof NavigationCancel) {
        //console.log('Navigation cancelled to:', event.url);
        this.loadingService.emitChange(false);
      } else if (event instanceof NavigationError) {
       // console.log('Navigation error to:', event.url);
       this.loadingService.emitChange(false);
      }
    });
  }
}
