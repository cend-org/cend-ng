
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { UploadService } from '../@core/services/upload.service';
import { ApiService } from '../@core/services/api.service';
import { environment } from '../environments/environment';


@Injectable()
export class ApiUploadService extends UploadService {
    override Upload(showErrorNotif: boolean, formData: FormData): Observable<HttpResponse<any>> | Observable<never> {
        return this.apiService.postMultipart<any>(environment.api_upload, formData).pipe(
            map((x: HttpResponse<any>) => {
                return this.handleResponse<any>(showErrorNotif, x);
            }),
            catchError(error => {
                return this.catchError(showErrorNotif, error);
            })
        );


       
    }
    // NewUser(showErrorNotif: boolean, newUserReq: UserTableReq): Observable<Observable<never> | HttpResponse<string>> {
    //     return this.apiService.post<any>(environment.api_new_user, newUserReq).pipe(
    //         map((x: HttpResponse<string>) => {
    //             return this.handleResponse<string>(showErrorNotif, x);
    //         }),
    //         catchError(error => {
    //             return this.catchError(showErrorNotif, error);
    //         })
    //     );
    // }

    // GetUser(showErrorNotif: boolean, login: string): Observable<Observable<never> | HttpResponse<UserTableReq>> {
    //     return this.apiService.get(environment.api_get_user + login).pipe(
    //         map((x: HttpResponse<UserTableReq>) => {
    //             return this.handleResponse<UserTableReq>(showErrorNotif, x);
    //         }),
    //         catchError(error => {
    //             return this.catchError(showErrorNotif, error);
    //         })
    //     );
    // }
    // UpdateUser(showErrorNotif: boolean, updateUserReq: UserTableReq): Observable<Observable<never> | HttpResponse<string>> {
    //     return this.apiService.post<any>(environment.api_update_user, updateUserReq).pipe(
    //         map((x: HttpResponse<string>) => {
    //             return this.handleResponse<string>(showErrorNotif, x);
    //         }),
    //         catchError(error => {
    //             return this.catchError(showErrorNotif, error);
    //         })
    //     );
    // }
    // GetRoles(showErrorNotif: boolean): Observable<Observable<never> | HttpResponse<Role[]>> {
    //     return this.apiService.get<Role[]>(environment.api_get_all_role).pipe(
    //         map((x: HttpResponse<Role[]>) => {
    //             return this.handleResponse<Role[]>(showErrorNotif, x);
    //         }),
    //         catchError(error => {
    //             return this.catchError(showErrorNotif, error);
    //         })
    //     );
    // }
    // GetExcel(showErrorNotif: boolean, tableParams: GetTableDataParam): Observable<Observable<never> | HttpResponse<Blob>> {
    //     return this.apiService.downloadPost(environment.api_export_users, tableParams).pipe(
    //         map((x: HttpResponse<Blob>) => {
    //             if (showErrorNotif && x.status == 202) {
    //                 //this.toastrService.danger(x.body, "Erreur");
    //                 throw new Error(x.body.toString());
    //             }
    //             if (x.status == 200) {
    //                 //console.log(x.headers.get("Content-Type"));
    //                 // this.downLoadFile(x.body, "application/pdf")
    //                 this.downLoadFile(x.body, x.headers.get("Content-Type"));
    //             }
    //             return x;
    //         }),
    //         catchError(error => {
    //             if (error instanceof (Error)) {
    //                 throw new Error(error.message);
    //             } else {
    //                 if (showErrorNotif) {
    //                     //this.toastrService.danger("Une erreur est survenue lors de téléchargement du réçu.", "Erreur");
    //                 }
    //                 throw new Error(error);
    //             }
    //         })
    //     );
    // }
    // AllUser(showErrorNotif: boolean, tableParams: GetTableDataParam): Observable<HttpResponse<Datatable<UserTableReq[]>>> | Observable<never> {
    //     return this.apiService.post<Datatable<Array<UserTableReq>>>(environment.api_get_all_user, tableParams).pipe(
    //         map((x: HttpResponse<Datatable<Array<UserTableReq>>>) => {
    //             return this.handleResponse<Datatable<Array<UserTableReq>>>(showErrorNotif, x);
    //         }),
    //         catchError(error => {
    //             return this.catchError(showErrorNotif, error);
    //         })
    //     );
    // }
    constructor(
        private apiService: ApiService) {
        super();
    }

    catchError(showErrorNotif: boolean, error: any): Observable<never> {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            if (showErrorNotif) {
                // console.log(error, 'Erreur');
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
    // downLoadFile(data: any, type: string) {
    //     let blob = new Blob([data], { type: type });
    //     let url = window.URL.createObjectURL(blob);
    //     let pwa = window.open(url);
    //     if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //         alert('Please disable your Pop-up blocker and try again.');
    //     }
    // }
}