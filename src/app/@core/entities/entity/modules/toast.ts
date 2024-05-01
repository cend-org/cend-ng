import { ToastPositionEnum, ToastSeverityEnum } from "../../../enumerations/ToastSetupEnum";

export class Toast{
    "title": string;
    "context": string;
    "severity": ToastSeverityEnum;
    "position": ToastPositionEnum;
}