import { LanguageEnum } from "../../enumerations/language.enum";
import { SexEnum } from "../../enumerations/sex.enum";

export class RegistrationWithInforeq{
    "Name": string;
    "FamilyName": string;
    "NickName":string;
    "Email":string;
    "BirthDate": Date;
    "Sex": SexEnum;
    "Lang": LanguageEnum;
}

export class RegistrationWithEmailreq{
    "Email":string;
}