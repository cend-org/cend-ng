import { Observable, Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginReq } from '../entities/requests/user-login-req';
import { UserLoginResp } from '../entities/responses/user-login-resp';
import { ApolloQueryResult } from '@apollo/client';

@Injectable()
export abstract class AuthService{
    abstract GetUserId(): number;
}

