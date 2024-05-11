import { MessageService } from "primeng/api";
import { ApiService } from "../@core/services/api.service";
import { AuthService } from "../@core/services/auth.service";
import { ApiAuthService } from "../services/api-auth.service";
import { LocalStorageService } from "../@core/services/local-storage.service";
import { ApiLocalStorageService } from "../services/api-local-storage.service";
import { ValidationService } from "../@core/services/validation.service";
import { ApiValidationService } from "../services/api-validation.service";
import { LangConfigService } from "../@core/services/lang-config.service";
import { LocalLangConfigService } from "../services/local-lang-config.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderService } from "../@core/services/header.service";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
import { JsonInterceptor } from "../@core/interceptors/json-interceptor";
import { UploadService } from "../@core/services/upload.service";
import { ApiUploadService } from "../services/api-upload.service";

export const COMMON_PROVIDER = [
    ApiService, 
    MessageService,
    HeaderService, 
    JwtHelperService,
    {provide: AuthService, useClass: ApiAuthService},
    {provide: UploadService, useClass: ApiUploadService},
    {provide: LocalStorageService, useClass: ApiLocalStorageService},
    {provide: ValidationService, useClass: ApiValidationService},
    {provide: LangConfigService, useClass: LocalLangConfigService},
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: JsonInterceptor, multi: true },
]