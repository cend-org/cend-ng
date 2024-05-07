// import { Injectable } from "@angular/core";
// import { AuthService } from "../services/auth.service";
// import { HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
// import { first, Observable, switchMap } from "rxjs";
// import { LocalStorageService } from "../services/local-storage.service";
// import { environment } from "../../environments/environment";

// @Injectable()
// export class ApolloInterceptor implements HttpInterceptor {

//   constructor(private myAuthService: AuthService, private localStorageService: LocalStorageService) {
//   }

// //   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

// //     console.log("REQ====>", req.url)
// //     if ((req.url.indexOf('/query') > -1)) {
// //         let tkn = this.localStorageService.get(`${environment.cend_default_lang_id}_tkn`);
// //         req = req.clone({
// //           setHeaders: {
// //             Authorization: `Bearer ${tkn.token}`
// //           }
// //         })
// //       }
// //       return next.handle(req);
// //   }


// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
//     console.log("======================>>");
//     if (!req.url.endsWith(environment.api_auth_login)) {
//       req = req.clone({
//         setHeaders: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         }
//       })
//     }
//     return this.handleRequest(req, next);
//   }
//   handleRequest(req: HttpRequest<any>, next: HttpHandler) {
//     const JWT = `Bearer ${this.localStorageService.get(`${environment.cend_default_lang_id}_tkn`)}`;
//     req = req.clone({
//       setHeaders: {
//         Authorization: JWT,
//       },
//     });
//     return next.handle(req);
//   }
// }





import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { first, Observable, switchMap } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";
import { environment } from "../../environments/environment";

@Injectable()
export class ApolloInterceptor implements HttpInterceptor {

  constructor(private myAuthService: AuthService, private localStorageService: LocalStorageService) {
  }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

//     console.log("REQ====>", req.url)
//     if ((req.url.indexOf('/query') > -1)) {
//         let tkn = this.localStorageService.get(`${environment.cend_default_lang_id}_tkn`);
//         req = req.clone({
//           setHeaders: {
//             Authorization: `Bearer ${tkn.token}`
//           }
//         })
//       }
//       return next.handle(req);
//   }


intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    alert("adasdasdas")
        return next.handle(req);
}
}
