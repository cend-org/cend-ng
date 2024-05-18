import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HeaderService } from '../services/header.service';
import { LoadingService } from '../services/loading.service';


@Injectable()
export class JsonInterceptor implements HttpInterceptor {
  constructor(
    private headerService: HeaderService,
    private loadingService: LoadingService,
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    this.loadingService.emitChange(true);
    if (req.url.endsWith(`${environment.api_host}/upload`)) {
      req = req.clone({
        setHeaders: {
          'Authorization': this.headerService.GetAuth()
        }
      })
    }
    return this.handleRequest(req, next);
  }
  handleRequest(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req);
  }
}