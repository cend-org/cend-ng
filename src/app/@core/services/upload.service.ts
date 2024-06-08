import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export abstract class UploadService {
    abstract Upload(showErrorNotif: boolean, formData: FormData): Observable<HttpResponse<any>> | Observable<never>;
}