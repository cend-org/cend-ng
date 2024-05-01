import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginReq } from '../entities/requests/user-login-req';
import { UserLoginResp } from '../entities/responses/user-login-resp';

@Injectable()
export abstract class AuthService{
    abstract Login(showErrorNotif:boolean, user: UserLoginReq): Observable<HttpResponse<UserLoginResp>>;
}

