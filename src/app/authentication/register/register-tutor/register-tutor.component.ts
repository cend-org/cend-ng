import { Component } from '@angular/core';
import { TutorRegisterStepEnum } from '../../../@core/enumerations/tutor-register-step.enum';
import { SelectItemGroup } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-register-tutor',
  templateUrl: './register-tutor.component.html',
  styleUrl: './register-tutor.component.scss'
})
export class RegisterTutorComponent {
  constructor(private messageService: MessageService) {}

  registrationStateStep: TutorRegisterStepEnum = TutorRegisterStepEnum.PHOTO
  groupedCities: SelectItemGroup[] | undefined;
  selectedCity: string | undefined;
  selectedlanguage: any = null;
  selectedSchoolLevel: any = null;
  selectedSubject: any = null;
  selectedcourseType:any = null;
  selectedDays:any = null;

  uploadedPhotoFiles: any[] = [];

  languages: any[] = [
    { name: 'Français', key: 'F', default:'Par défaut'},
    { name: 'English', key: 'E', default:'' }, 
];

schoolLevels: any[] = [
  { name: 'Primaire 1', key: 'P'},
  { name: 'Primaire 2', key: 'P'},
  { name: 'Primaire 3', key: 'P'},
  { name: 'Primaire 4', key: 'P'},
  { name: 'Primaire 5', key: 'P'},
  { name: 'Primaire 6', key: 'P'},

  { name: 'Secondaire 1', key: 'S'},
  { name: 'Secondaire 2', key: 'S'},
  { name: 'Secondaire 3', key: 'S'},
  { name: 'Secondaire 4', key: 'S'},
  { name: 'Secondaire 5', key: 'S'},

  { name: 'Cégep', key: 'C'},
  { name: 'Universités', key: 'U'},

];

subjects: any[] = [
  { name: 'Mathématiques', key: 'M'},
  { name: 'Français', key: 'M'},
];

courseTypes: any[] = [
  { name: 'En Ligne', key: 'L', description: 'Economique, rapide, certains d\'avoir le meilleur tuteur.'},
  { name: 'En Presentiel', key: 'P', description: 'Option prémium, sélection plus limitée de tuteur.'},
];
days: any[] = [
  { name: 'Lundi', key: 'L', },
  { name: 'Mardi', key: 'M' },
  { name: 'Mercredi', key: 'M' },
  { name: 'Jeudi', key: 'J' },
  { name: 'Vendredi', key: 'V' },
  { name: 'Samedi', key: 'S' },
  { name: 'Dimanche', key: 'D' },
];
  nextStep(current: string){
    if (current == "EMAIL"){
      this.registrationStateStep = TutorRegisterStepEnum.OTP
    }

    if (current == "OTP"){
      this.registrationStateStep = TutorRegisterStepEnum.PASSWORD
    }

    if (current == "PASSWORD"){
      this.registrationStateStep = TutorRegisterStepEnum.ABOUT
    }

    if (current == "ABOUT"){
      this.registrationStateStep = TutorRegisterStepEnum.PHOTO
    }

    if (current == "PHOTO"){
      this.registrationStateStep = TutorRegisterStepEnum.VIDEO
    }
    if (current == "VIDEO"){
      this.registrationStateStep = TutorRegisterStepEnum.CV
    }
    if (current == "CV"){
      this.registrationStateStep = TutorRegisterStepEnum.DESCRIPTION
    }
    if (current == "DESCRIPTION"){
      this.registrationStateStep = TutorRegisterStepEnum.COURSE_TYPE
    }
    if (current == "COURSE_TYPE"){
      this.registrationStateStep = TutorRegisterStepEnum.AVAILABILITY
    }
    if (current == "AVAILABILITY"){
      this.registrationStateStep = TutorRegisterStepEnum.CONFIRMATION
    }
  }

  ngOnInit(): void {
    this.selectedSchoolLevel = this.schoolLevels[0];
    this.selectedlanguage = this.languages[0];
    this.selectedSubject = this.subjects[0];
    this.selectedcourseType = this.courseTypes[0];
    this.selectedDays = this.days[0];
    this.groupedCities = [
      {
          label: 'Germany',
          value: 'de',
          items: [
              { label: 'Berlin', value: 'Berlin' },
              { label: 'Frankfurt', value: 'Frankfurt' },
              { label: 'Hamburg', value: 'Hamburg' },
              { label: 'Munich', value: 'Munich' }
          ]
      },
      {
          label: 'USA',
          value: 'us',
          items: [
              { label: 'Chicago', value: 'Chicago' },
              { label: 'Los Angeles', value: 'Los Angeles' },
              { label: 'New York', value: 'New York' },
              { label: 'San Francisco', value: 'San Francisco' }
          ]
      },
      {
          label: 'Japan',
          value: 'jp',
          items: [
              { label: 'Kyoto', value: 'Kyoto' },
              { label: 'Osaka', value: 'Osaka' },
              { label: 'Tokyo', value: 'Tokyo' },
              { label: 'Yokohama', value: 'Yokohama' }
          ]
      }
  ];
  }
  onUpload(event:FileUploadEvent) {
    for(let file of event.files) {
        this.uploadedPhotoFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
}
