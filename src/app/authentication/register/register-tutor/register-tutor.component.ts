import { Component } from '@angular/core';
import { TutorRegisterStepEnum } from '../../../@core/enumerations/tutor-register-step.enum';
import { SelectItemGroup } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';
import { Apollo, gql } from 'apollo-angular';
import { AuthService } from '../../../@core/services/auth.service';
import { HeaderService } from '../../../@core/services/header.service';
import { LocalStorageService } from '../../../@core/services/local-storage.service';
import { ValidationService } from '../../../@core/services/validation.service';
import { LanguageData } from '../../../@core/datas/language-data';
import { Sex } from '../../../@core/datas/sex.data';
import { CourseTypeData } from '../../../@core/datas/course-type.data';
import { PASSWORD, REGISTRATION } from '../../../services/graphs/auth.graph';
import { UserTypeEnum } from '../../../@core/enumerations/user-type.enum';
import { environment } from '../../../environments/environment';
import { RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { DaysData } from '../../../@core/datas/days.data';
import { GroupedCitiesData } from '../../../@core/datas/grouped-cities.data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DocumentNode } from 'graphql';
import { UploadService } from '../../../@core/services/upload.service';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { UploadTypeEnum } from '../../../@core/enumerations/upload-type.enum';
import { isDate } from 'util/types';
import { LoadingService } from '../../../@core/services/loading.service';
import { Router } from '@angular/router';

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
  constructor(
    private validationService: ValidationService,
    private apolloService: Apollo,
    private locaStorageService: LocalStorageService,
    private headerService: HeaderService,
    private authService: AuthService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private http: HttpClient, 
    private loadingService: LoadingService,
    private router: Router,
  ) { }
  inputNotValid: boolean = false;

  error_message: string = '';

  email: string = "";
  password: string = "";
  passwordConfirm: string = "";
  name: string = "";
  familyName: string = "";
  birthDate: any = "";
  nickName: string = "";

  // email: string =`parent_${Math.random().toString(36).substr(2, 9)}@email.com`;
  // password: string = "pwd";
  // passwordConfirm: string = "pwd";
  // name: string = "nao";
  // familyName: string = "julius";
  // birthDate: any = new Date();
  // nickName: string = `parent_${Math.random().toString(36).substr(2, 9)}`;


  registrationProfileInfoReq: RegistrationWithInforeq = new RegistrationWithInforeq();
  registrationStateStep: TutorRegisterStepEnum = TutorRegisterStepEnum.PHOTO;
  loading: boolean = false;
  groupedCities: SelectItemGroup[] | undefined;
  selectedCity: string | undefined;
  selectedlanguage: any = null;
  selectedSex: any = null;
  selectedEducationLevel: any = null;
  selectedSubject: any = null;
  selectedcourseType: any = null;
  selectedDays: any = null;




  sex: any[] = Sex;
  languages: any[] = LanguageData;
  educationLevels: any[] = [];
  subjects: any[] = [];
  courseTypes: any[] = CourseTypeData;
  days: any[] = DaysData;
  uploadForm: FormGroup | undefined;
  ngOnInit(): void {
    //this.getEducationLevel();
    this.selectedDays = this.days[0];
    this.groupedCities = GroupedCitiesData;
    this.uploadForm = this.formBuilder.group({
      photo: [''],
      video: [''],
    });
  }
  registerWithEmail(nextCallback: any){

    if(!this.validationService.checkEmail(this.email)){
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier votre email!' });
      return;
    }
    this.apolloService.mutate({
      mutation:gql`
      mutation 
      NewTutor(
              $email: String!,
          ) 
          {
            NewTutor (
                  email: $email ,
              ){
                  T
              }
          }
  `,
      variables: {
        email: this.email
      },
    }).subscribe({
      next: (response) => {
        let resp: any = response.data;
        if (resp) {
          this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["NewTutor"]["T"]);
          nextCallback.emit();
        };
        this.loadingService.emitChange(false);
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }

  registerNewPassword(nextCallback: any){
    if (this.password != this.passwordConfirm) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Mots de passe non identique!' });
      return;
    }

    if (this.password.length <=0 || this.passwordConfirm.length <=0 ) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Les mots de passe ne doivent pas être vide!' });
      return;
    }

    this.apolloService.mutate({
      mutation: PASSWORD.NEW_PASSWORD,
      variables: {
        "password": {
          "Hash" :  this.password
      }
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response) => {
        this.loadingService.emitChange(false);
        nextCallback.emit();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitemnt!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }

  registerAboutInfo(nextCallback: any){
  if (!this.name.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'votre nom est requis!' });
      return;
    }

    if (!this.familyName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'votre prénom est requis!' });
      return;
    }


    if (!this.birthDate) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Date de naissance invalide!' });
      return;
    }
    
    if (!this.nickName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'votre nom d\'utilisateur est requis!' });
      return;
    }

    if (!this.selectedSex) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre sex!' });
      return;
    }


    if (!this.selectedlanguage) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre langue maternelle!' });
      return;
    }



    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_INFO,
      variables: {
        "profile": {
          "Name" : this.name,
          "FamilyName": this.familyName,
          "NickName":  this.nickName,
          "Sex": this.selectedSex.value,
          "Lang": this.selectedlanguage.value,
          "Email": this.email,
      }
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response) => {
       this.loadingService.emitChange(false);
       nextCallback.emit()
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  registerLanguage(nextCallback: any){
    this.getEducationLevel(nextCallback);
    // this.loadingService.emitChange(true);
    // setTimeout(() => {
    //   this.loadingService.emitChange(false);
      
    //  // nextCallback.emit();
    // }, 1000);
  }
  getEducationLevel(nextCallback: any) {
    this.loadingService.emitChange(true);
    this.apolloService.query({
      query: gql`
      query AcademicLevels {
          AcademicLevels {
              Id
              CreatedAt
              UpdatedAt
              DeletedAt
              Name
          }
      }`,
    }).subscribe({
      next: (response: any) => {
        let educations: Array<any> = response?.data['AcademicLevels'];
        this.educationLevels = educations ? educations : [];
        this.loadingService.emitChange(false);
        nextCallback.emit();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  registerEducationLevel(nextCallback: any){
    if (!this.selectedEducationLevel) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre niveau scolaire!' });
      return;
    }
    this.getSubjects(nextCallback);
    //this.registrationStateStep = StudentRegisterStepEnum.SUBJECT;
  }
  getSubjects(nextCallback: any) {

    
    this.apolloService.query({
      query: gql`
      query ($academicLevelId: Int!) {
        AcademicCourses(AcademicLevelId: $academicLevelId) {
            Id
            CreatedAt
            UpdatedAt
            DeletedAt
            AcademicLevelId
            Name
        }
    }`,
      variables: {
        "academicLevelId": this.selectedEducationLevel.Id
      }

    }).subscribe({
      next: (response: any) => {
        let subjectList: Array<any> = response?.data['AcademicCourses'];
        this.subjects = subjectList ? subjectList : [];
        this.loadingService.emitChange(false);
        nextCallback.emit();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  registerSubject(nextCallback: any){
      if (!this.selectedSubject) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir la matière dont vous avez besoins d\'aide!' });
      return;
    }
    nextCallback.emit(); //eto
    this.apolloService.mutate({
      mutation: gql`
        mutation setUserEducationLevel($subjectId: Int!) {
            setUserEducationLevel(subjectId: $subjectId) {
              Id,
              Name
            }
        }
      `,
      variables: {
        subjectId: this.selectedSubject.Id
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response: any) => {
        this.loadingService.emitChange(false);
        nextCallback.emit()
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  registerCourseType(nextCallback: any){
    if (!this.selectedcourseType) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir le type de cours dont vous avez besoins!' });
      return;
    }
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      
     nextCallback.emit();
    }, 1000);
    //let user_id: number = this.authService.GetUserId();

    // this.apolloService.mutate({
    //   mutation: gql`
    //     mutation setUserCoursePreference($isOnline: Boolean!) {
    //       setUserCoursePreference(isOnline: $isOnline) {
    //           Id,
    //           UserId
    //           IsOnline
    //         }
    //     }
    //   `,
    //   variables: {
    //     isOnline: this.selectedcourseType.value
    //   },
    //   context: {
    //     headers: this.headerService.Get()
    //   }
    // }).subscribe({
    //   next: (response: any) => {
    //     this.loadingService.emitChange(false);
    //     nextCallback.emit();
    //   },
    //   error: (e) => {
    //     this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
    //     this.loadingService.emitChange(false);
    //   }
    // });
  }


  selectedImageSrc: string = "assets/image/avatar.svg";
  selectedVideoSrc: string  = "assets/image/video.svg";
  onPhotoSelected(event: any) {
    const file = event.target?.files[0];
    if (event.target.files.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo valide!' });
      return;
    }
    let extension: string = file?.name.substring(file?.name.lastIndexOf('.') + 1);
    
    if (!environment.accepted_photo.includes(extension.toLowerCase())) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo valide!' });
      return;
    }

    this.uploadForm?.get('photo')?.setValue(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImageSrc = reader.result as string;
    }
    reader.readAsDataURL(file);

  }
  onVideoSelected(event: any) {
    const file = event.target?.files[0];
    if (event.target.files.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo valide!' });
      return;
    }
    let extension: string = file?.name.substring(file?.name.lastIndexOf('.') + 1);

    if (!environment.accepted_videos.includes(extension.toLowerCase())) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo valide!' });
      return;
    }

    this.uploadForm?.get('video')?.setValue(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedVideoSrc = reader.result as string;
    }
    reader.readAsDataURL(file);

  }


  registerPhoto(nextCallback: any) {
    let formData = new FormData();
    let fileValue = this.uploadForm?.get("photo")?.value;
    if (fileValue) {
      formData.append('documentType', JSON.stringify(UploadTypeEnum.USER_PROFILE_IMAGE));
      formData.append('file', fileValue);
      
      this.uploadService.Upload(false, formData).subscribe({
        next: (resp: HttpResponse<any>)=>{
          this.registrationStateStep = TutorRegisterStepEnum.VIDEO;
          this.loadingService.emitChange(false);
          nextCallback.emit()
        }, 
        error: (e)=>{
          this.loadingService.emitChange(false);
          this.messageService.add({ severity: 'error', summary: 'Erreur de traitement!', detail: 'Une erreur est survenue lors du traitement!' });
        }
       });

    } else {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo!' });
    }
  }


  registerVideo(nextCallback: any) {
    let formData = new FormData();
    let fileValue = this.uploadForm?.get("video")?.value;
    
    if (fileValue) {
      formData.append('documentType', JSON.stringify(UploadTypeEnum.VIDEO_PRESENTATION));
      formData.append('file', fileValue);
      this.uploadService.Upload(true, formData).subscribe({
        next: (resp: HttpResponse<any>)=>{
          this.registrationStateStep = TutorRegisterStepEnum.DESCRIPTION;
          this.loadingService.emitChange(false);
          nextCallback.emit();
        }, error: (e)=>{
          this.loadingService.emitChange(false);
          this.messageService.add({ severity: 'error', summary: 'Erreur de traitement!', detail: 'Une erreur est survenue lors du traitement!' });
        }
       });
      } else {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo!' });
    }
  }
  descriptionPresentation:string = "";
  descriptionExperience:string = "";
  descriptionMotivation: string = "";
  registerDescription(nextCallback: any){
    if (!this.descriptionPresentation.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez ajouter une description!' });
      return;
    }
    if (!this.descriptionExperience.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez ajouter votre experience!' });
      return;
    }
    if (!this.descriptionMotivation.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez ajouter votre motivation!' });
      return;
    }
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      
     nextCallback.emit();
    }, 1000);
  }

  availability: Date[] | undefined;
  registerAvailability(nextCallback: any) {
    if (!this.availability) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez Ajoutez votre disponibilite!' });
      return;
    }
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      nextCallback.emit();
    }, 1000);
  }

  registerVerification(nextCallback: any){
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      
     nextCallback.emit();
    }, 1000);
  }
  renumerations: any[] = [
    {
      "name":  "premier essaie",
      "renumeration": "0$"  
    },
    {
     "name":  "0-20h",
     "renumeration" : "50%", 
    },
    {
     "name":  "21-50h",
     "renumeration":"55%", 
    },
    {
     "name":  "50-200h",
     "renumeration" : "58%", 
    }, 
    {
      "name":"200-400h",
      "renumeration" : "61%", 
    },
    {
      "name":"400h +",
      "renumeration" : "70%", 
    }
  ];
  registerRenumeration(nextCallback: any){
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      this.router.navigateByUrl("pages/dashboard");
    }, 1000);
  }
}


