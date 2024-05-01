
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../@core/services/auth.service';
import { ApiService } from '../@core/services/api.service';
import { Router } from '@angular/router';
import { UserLoginReq } from '../@core/entities/requests/user-login-req';
import { UserLoginResp } from '../@core/entities/responses/user-login-resp';
import { environment } from '../environments/environment';
import { ToastModule } from 'primeng/toast';



@Injectable()
export class ApiAuthService extends AuthService {
    constructor(
        private apiService: ApiService, 
        private router: Router,
        ) {
        super();
    }
    override Login(showErrorNotif: boolean, loginReq: UserLoginReq): Observable<HttpResponse<UserLoginResp>> {
        return this.apiService.post<UserLoginReq>(environment.api_auth_login, loginReq).pipe(
            map((x: HttpResponse<UserLoginResp> | Observable<never>) => {
                return this.handleResponse<UserLoginResp>(showErrorNotif, x);
            }),
            catchError(error => {
                return this.catchError(showErrorNotif, error);
            })
        );
    }

    catchError(showErrorNotif: boolean, error: any): Observable<never> {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            if (showErrorNotif) {
                //  console.log(error, 'Erreur');
                // this.toastrService.danger("Une erreur est survenue.", "Erreur");
            }
            throw new Error(error);
        }
    }
    handleResponse<T>(showErrorNotif: boolean, response: any): HttpResponse<T> {
        if (showErrorNotif && response.status == 202) {
            // console.log(response.body, 'Erreur');
            throw new Error(response.body.toString());
        }
        return response;
    }
    downLoadFile(data: any, type: string) {
        let blob = new Blob([data], { type: type });
        let url = window.URL.createObjectURL(blob);
        let pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
            alert('Please disable your Pop-up blocker and try again.');
        }
    }
}