import { MessageService } from "primeng/api";
import { ApiService } from "../@core/services/api.service";
import { AuthService } from "../@core/services/auth.service";
import { ApiAuthService } from "../services/api-auth.service";

export const COMMON_PROVIDER = [
    ApiService, 
    MessageService,
    {provide: AuthService, useClass: ApiAuthService},
]