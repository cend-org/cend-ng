
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
import { environment } from '../environments/environment';

const LOGIN_QUERY = gql`
    mutation{
        logIn(email:"rawalci@gmail.com", password: "valciokely")
    }
`;

@Injectable()
export class ApiAuthService extends AuthService {
    override LogOut(): void {
        this.locaStorageService.remove(`${environment.cend_default_lang_id}_tkn`);
    }
    override IsAuthentified(): boolean {
        let token = this.locaStorageService.get(`${environment.cend_default_lang_id}_tkn`);
        if(token){
            return !this.jwtHelper.isTokenExpired(token);
        }
        return false;
    }
    override GetUserId(): number {
        return this.locaStorageService.decode("user_id");
    }

    constructor(
       private locaStorageService: LocalStorageService,
       public jwtHelper: JwtHelperService,
       private router: Router
        ) {
        super();
    }
    

    
}