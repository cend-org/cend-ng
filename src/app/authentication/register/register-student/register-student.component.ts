import { Component } from '@angular/core';
import { StudentRegisterStepEnum } from '../../../@core/enumerations/student-register-step.enum';
import { SelectItemGroup } from 'primeng/api';
import { ValidationService } from '../../../@core/services/validation.service';
import { RegistrationWithEmailreq, RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { Apollo } from 'apollo-angular';
import { PASSWORD, REGISTRATION } from '../../../services/graphs/auth.graph';
import { LocalStorageService } from '../../../@core/services/local-storage.service';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.scss'
})
export class RegisterStudentComponent {
  constructor(
    private validationService: ValidationService, 
    private apolloService: Apollo, 
    private locaStorageService: LocalStorageService,
    private toastrService: ToastrService
  ){}
  inputNotValid: boolean = false;
  
  error_message: string = '';

  email: string = "";
  password: string = "";
  passwordConfirm: string = "";

  registrationProfileInfoReq: RegistrationWithInforeq = new RegistrationWithInforeq();

  registrationStateStep: StudentRegisterStepEnum = StudentRegisterStepEnum.EMAIL
  loading: boolean = false;
  groupedCities: SelectItemGroup[] | undefined;
  selectedCity: string | undefined;
  selectedlanguage: any = null;
  selectedSchoolLevel: any = null;
  selectedSubject: any = null;
  selectedcourseType:any = null;
  selectedDays:any = null;

  


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


    if (current == "OTP"){
      this.registrationStateStep = StudentRegisterStepEnum.PASSWORD
    }

    if (current == "PASSWORD"){
      this.registrationStateStep = StudentRegisterStepEnum.ABOUT
    }

    if (current == "ABOUT"){
      this.registrationStateStep = StudentRegisterStepEnum.LANGUAGE
    }

    if (current == "LANGUAGE"){
      this.registrationStateStep = StudentRegisterStepEnum.SCHOOL_LEVEL
    }
    if (current == "SCHOOL_LEVEL"){
      this.registrationStateStep = StudentRegisterStepEnum.SUBJECT
    }
    if (current == "SUBJECT"){
      this.registrationStateStep = StudentRegisterStepEnum.COURSE_TYPE
    }
    if (current == "COURSE_TYPE"){
      this.registrationStateStep = StudentRegisterStepEnum.AVAILABILITY
    }
    if (current == "AVAILABILITY"){
      this.registrationStateStep = StudentRegisterStepEnum.SUGGESTED_TUTOR
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

  registerWithEmail(){
    this.loading  = true;
    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_EMAIL,
      variables: {
        input: this.email,
      }
    }).subscribe({
      next: (response)=>{
        let resp: any = response.data;
        if(resp){
          this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["registerWithEmail"]);
          this.registrationStateStep = StudentRegisterStepEnum.PASSWORD;
          this.inputNotValid = false;
        };
        this.loading = false;
      },
      error: (e)=>{
        this.inputNotValid = true;
        this.error_message = e.message;
        this.loading = false
      }
    });
  }


  setNewPassword(){
    if(this.password != this.passwordConfirm){
      this.toastrService.error("les mots de passes ne sont pas conforme!");
      return;
    }
    this.loading = true;
    this.apolloService.mutate({
      mutation: PASSWORD.NEW_PASSWORD,
      variables: {
        password: this.password,
      }
    }).subscribe({
      next: (response)=>{
        this.registrationStateStep = StudentRegisterStepEnum.ABOUT;
        this.loading = false
      },
      error: (e)=>{
        this.toastrService.error('', e.message);
        this.loading = false;
      }
    });
  }
}