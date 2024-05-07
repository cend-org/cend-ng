
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../@core/services/auth.service';
import { ApiService } from '../@core/services/api.service';
import { Router } from '@angular/router';
import { UserLoginReq } from '../@core/entities/requests/user-login-req';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client';

const LOGIN_QUERY = gql`
    mutation{
        logIn(email:"rawalci@gmail.com", password: "valciokely")
    }
`;

@Injectable()
export class ApiAuthService extends AuthService {
    override Login(showErrorNotif: boolean, user: UserLoginReq): Observable<ApolloQueryResult<any>> {
        throw new Error('Method not implemented.');
    }
    override JWT(): Observable<any> {
        throw new Error('Method not implemented.');
    }
    constructor(
        private apiService: ApiService, 
        private router: Router,
        private readonly apolloService: Apollo
        ) {
        super();
    }
    

    
}