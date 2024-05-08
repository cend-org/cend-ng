
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../@core/services/auth.service';
import { ApiService } from '../@core/services/api.service';
import { Router } from '@angular/router';
import { UserLoginReq } from '../@core/entities/requests/user-login-req';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from '../@core/services/local-storage.service';

const LOGIN_QUERY = gql`
    mutation{
        logIn(email:"rawalci@gmail.com", password: "valciokely")
    }
`;

@Injectable()
export class ApiAuthService extends AuthService {
    override GetUserId(): number {
        return this.locaStorageService.decode("user_id");
    }

    constructor(
       private jwtService : JwtHelperService,
       private locaStorageService: LocalStorageService
        ) {
        super();
    }
    

    
}