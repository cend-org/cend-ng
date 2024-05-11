import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { MessageService, SelectItemGroup } from 'primeng/api';
import { CourseTypeData } from '../../../@core/datas/course-type.data';
import { DaysData } from '../../../@core/datas/days.data';
import { GroupedCitiesData } from '../../../@core/datas/grouped-cities.data';
import { LanguageData } from '../../../@core/datas/language-data';
import { Sex } from '../../../@core/datas/sex.data';
import { RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { TeacherRegisterStepEnum } from '../../../@core/enumerations/teacher-register-step.enum';
import { UploadTypeEnum } from '../../../@core/enumerations/upload-type.enum';
import { UserTypeEnum } from '../../../@core/enumerations/user-type.enum';
import { AuthService } from '../../../@core/services/auth.service';
import { HeaderService } from '../../../@core/services/header.service';
import { LocalStorageService } from '../../../@core/services/local-storage.service';
import { UploadService } from '../../../@core/services/upload.service';
import { ValidationService } from '../../../@core/services/validation.service';
import { environment } from '../../../environments/environment';
import { REGISTRATION, PASSWORD } from '../../../services/graphs/auth.graph';

@Component({
  selector: 'app-register-profesor',
  templateUrl: './register-profesor.component.html',
  styleUrl: './register-profesor.component.scss'
})
export class RegisterProfesorComponent {
  constructor(
    private validationService: ValidationService,
    private apolloService: Apollo,
    private locaStorageService: LocalStorageService,
    private headerService: HeaderService,
    private authService: AuthService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private http: HttpClient
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


  registrationProfileInfoReq: RegistrationWithInforeq = new RegistrationWithInforeq();
  registrationStateStep: TeacherRegisterStepEnum = TeacherRegisterStepEnum.VIDEO;
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
    this.getEducationLevel();
    this.selectedDays = this.days[0];
    this.groupedCities = GroupedCitiesData;
    this.uploadForm = this.formBuilder.group({
      photo: [''],
      video: [''],
    });
  }

  registerWithEmail() {
    if (!this.validationService.checkEmail(this.email)) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier votre email!' });
      return;
    }
    this.loading = true;
    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_EMAIL,
      variables: {
        input: this.email,
        as: UserTypeEnum.PROFESSOR
      },
    }).subscribe({
      next: (response) => {
        let resp: any = response.data;
        if (resp) {
          this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["registerWithEmail"]);
          this.registrationStateStep = TeacherRegisterStepEnum.PASSWORD;
          this.inputNotValid = false;
        };
        this.loading = false;
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false
      }
    });
  }


  registerNewPassword() {
    if (this.password != this.passwordConfirm) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Mots de passe non identique!' });
      return;
    }

    if (this.password.length <= 0 || this.passwordConfirm.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Les mots de passe ne doivent pas être vide!' });
      return;
    }


    this.loading = true;
    this.apolloService.mutate({
      mutation: PASSWORD.NEW_PASSWORD,
      variables: {
        password: this.password,
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response) => {
        this.registrationStateStep = TeacherRegisterStepEnum.ABOUT;
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitemnt!', detail: e.message });
        this.loading = false;
      }
    });
  }


  registerAboutInfo() {
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



    this.loading = true;
    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_INFO,
      variables: {
        Name: this.name,
        FamilyName: this.familyName,
        NickName: this.nickName,
        BirthDate: this.birthDate,
        Sex: this.selectedSex.value,
        Lang: this.selectedlanguage.value,
        Email: this.email,
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response) => {
        this.registrationStateStep = TeacherRegisterStepEnum.SCHOOL_LEVEL;
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false;
      }
    });
  }

  getEducationLevel() {
    this.loading = true;
    this.apolloService.query({
      query: gql`query {
        getEducation {
              Id
              Name
          }
      }`,
    }).subscribe({
      next: (response: any) => {
        let educations: Array<any> = response?.data['getEducation'];
        this.educationLevels = educations ? educations : [];
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false;
      }
    });
  }

  registerEducationLevel() {
    if (!this.selectedEducationLevel) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre niveau scolaire!' });
      return;
    }


    this.getSubjects();
    this.registrationStateStep = TeacherRegisterStepEnum.SUBJECT;
  }
  getSubjects() {

    this.loading = true;
    this.apolloService.query({
      query: gql`
      query getSubjects($id: ID!) {
        getSubjects(id: $id) {
          Id
          Name
        }
      }`,
      variables: {
        id: this.selectedEducationLevel.Id
      }

    }).subscribe({
      next: (response: any) => {
        let subjectList: Array<any> = response?.data['getSubjects'];
        this.subjects = subjectList ? subjectList : [];
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
        this.loading = false;
      }
    });
  }
  registerSubject() {
    if (!this.selectedSubject) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir la matière dont vous avez besoins d\'aide!' });
      return;
    }

    this.loading = true;
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
        this.registrationStateStep = TeacherRegisterStepEnum.PHOTO;
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false;
      }
    });
  }
 



  acceptedExtentions: Array<String> = ['png', 'jpg', 'jpeg', 'webp']
  selectedImageSrc: string = "assets/image/avatar.svg";
  selectedVideoSrc: string  = "assets/image/video.svg";
  onPhotoSelected(event: any) {
    const file = event.target?.files[0];
    if (event.target.files.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo valide!' });
      return;
    }
    let extension: string = file?.name.substring(file?.name.lastIndexOf('.') + 1);

    if (!this.acceptedExtentions.includes(extension.toLowerCase())) {
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

    if (!['mp4', "avi", "webm"].includes(extension.toLowerCase())) {
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


  registerPhoto() {
    let formData = new FormData();
    let fileValue = this.uploadForm?.get("photo")?.value;
    formData.append('documentType', JSON.stringify(UploadTypeEnum.USER_PROFILE_IMAGE));
    formData.append('file', fileValue);

    if (fileValue) {
      // this.uploadService.Upload(true, formData).subscribe({
      //   next: (resp: HttpResponse<any>)=>{
      //     console.log(resp);
      //   }
      //  });
      this.registrationStateStep = TeacherRegisterStepEnum.VIDEO;
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo!' });
    }
  }


  registerVideo() {
    let formData = new FormData();
    let fileValue = this.uploadForm?.get("video")?.value;
    formData.append('documentType', JSON.stringify(UploadTypeEnum.VIDEO_PRESENTATION));
    formData.append('file', fileValue);
    if (fileValue) {
     
      // this.uploadService.Upload(true, formData).subscribe({
      //   next: (resp: HttpResponse<any>)=>{
      //     console.log(resp);
      //   }
      //  });
      this.registrationStateStep = TeacherRegisterStepEnum.DESCRIPTION;


    } else {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo!' });
    }
  }



  descriptionPresentation:string = "";
  descriptionExperience:string = "";
  descriptionMotivation: string = "";
  registerDescription(){
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

    this.registrationStateStep = TeacherRegisterStepEnum.COURSE_TYPE;

  }

  registerCourseType() {
    //this.loading = true;
    if (!this.selectedcourseType) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir le type de cours dont vous avez besoins!' });
      return;
    }
    let user_id: number = this.authService.GetUserId();

    this.loading = true;
    this.apolloService.mutate({
      mutation: gql`
        mutation setUserCoursePreference($isOnline: Boolean!) {
          setUserCoursePreference(isOnline: $isOnline) {
              Id,
              UserId
              IsOnline
            }
        }
      `,
      variables: {
        isOnline: this.selectedcourseType.value
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response: any) => {
        this.registrationStateStep = TeacherRegisterStepEnum.AVAILABILITY;
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false;
      }
    });
  }

  availability: Date[] | undefined;
  registerAvailability() {
    if (!this.availability) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez Ajoutez votre disponibilite!' });
      return;
    }

    this.registrationStateStep = TeacherRegisterStepEnum.CONTACT;
  }

}
