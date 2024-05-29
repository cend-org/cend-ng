import { Component } from '@angular/core';
import { TutorRegisterStepEnum } from '../../../@core/enumerations/tutor-register-step.enum';
import { PrimeNGConfig, SelectItemGroup } from 'primeng/api';
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
import { isDate, isNumberObject } from 'util/types';
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
    private config: PrimeNGConfig
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

  // email: string =`tutor${Math.random().toString(36).substr(2, 9)}@email.com`;
  // password: string = "password";
  // passwordConfirm: string = "password";
  // name: string = Math.random().toString(36).substr(2, 9);
  // familyName: string = Math.random().toString(36).substr(2, 9);
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
    this.config.setTranslation({
      dayNamesMin: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
  });
    this.selectedDays = this.days[0];
    this.groupedCities = GroupedCitiesData;
    this.uploadForm = this.formBuilder.group({
      photo: [''],
      video: [''],
      cv:['']
    });
  }
  

  _subjects: any[] = [];
  selectedSubjects: any[] = [];
  filterAcademicCourse(input: any) {
    const searchedCourse = this.normalizeString(input.value);
    if (!searchedCourse.trim()) {
      this._subjects = [...this.selectedSubjects, ...this.subjects.filter(subject => !this.selectedSubjects.includes(subject))];
    } else {
      const filteredCourses = this.subjects.filter(subject =>
        this.normalizeString(subject.Name).includes(searchedCourse) &&
        !this.selectedSubjects.includes(subject)
      );
      this._subjects = [...this.selectedSubjects, ...filteredCourses];
    }
  }

  onClickAcademicCourse(subject: any, button: HTMLElement) {
    if (this.selectedSubjects.find(x => x.Name.toLowerCase() == subject.Name.toLowerCase())) {
      this.selectedSubjects = this.selectedSubjects.filter(x => x.Id != subject.Id);
    } else {
      this.selectedSubjects.push(subject);
    }
  }

  getAcademicCourseSelectedBackground(subject: any): String {
    if (this.selectedSubjects.find(x => x.Name.toLowerCase() == subject.Name.toLowerCase())) {
      return "bg-green-200";
    }
    return "";
  }

  onClickEducationLevel(education: any) {
    this.selectedEducationLevel = education;
  }

  _educationLevels: Array<any> = []
  filterEducationLevel(input: any) {
    const searchedEd = this.normalizeString(input.value);
    if (!searchedEd.trim()) {
      this._educationLevels = this.educationLevels; // Restaure les données d'origine si la recherche est vide
    } else {
      this._educationLevels = this.educationLevels.filter(subject =>
        this.normalizeString(subject.Name).includes(searchedEd)
      );
    }
  }

  getEducationLevelBackground(educationLevel: any): String {

    if (this.selectedEducationLevel && this.selectedEducationLevel.Name.toLowerCase() == educationLevel.Name.toLowerCase()) {
      return "bg-green-200";
    }
    return "";
  }

  onClickCourseType(coursetype: any) {
    this.selectedcourseType = coursetype
  }

  getCourseTypeSelectedBackground(courseType: any): String {
    if (this.selectedcourseType && this.selectedcourseType.name.toLowerCase() == courseType.name.toLowerCase()) {
      return "bg-green-200";
    }
    return "";
  }










  filterLanguage(input: any) {
    const searchedLang = this.normalizeString(input.value);
    if (!searchedLang.trim()) {
      this.languages = LanguageData; // Restaure les données d'origine si la recherche est vide
    } else {
      this.languages = this.languages.filter(x =>
        this.normalizeString(x.name).includes(searchedLang)
      );
    }

  }
  onClickLanguage(lang: any) {
    this.selectedlanguage = lang;
  }
  normalizeString(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  getSelectedLanguageBackground(lang: any): String {
    if (this.selectedlanguage && this.selectedlanguage.code.toLowerCase() == lang.code.toLowerCase()) {
      return "bg-green-200";
    }
    return "";
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
    
    // if (!this.nickName.trim()) {
    //   this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'votre nom d\'utilisateur est requis!' });
    //   return;
    // }

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
       this.getAcademicLevel(nextCallback);
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  registerLanguage(nextCallback: any){
    

    
    // this.loadingService.emitChange(true);
    // setTimeout(() => {
    //   this.loadingService.emitChange(false);
      
    //  // nextCallback.emit();
    // }, 1000);
  }
  getAcademicLevel(nextCallback: any) {
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
        // this.educationLevels = educations ? educations : [];
        // this._educationLevels = educations;
        this.academicLevelItem = educations[0];
        this.academicLevelItems = educations;
        this.originalAcademicLevelItems = educations;
        this.filterAcademicLevel();
        this.loadingService.emitChange(false);
        nextCallback.emit();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  registerAcademicLevel(nextCallback: any){
    if (this.selectedAcademicLevelItem.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre niveau scolaire!' });
      return;
    }
    
    //let academicLevels: Array<any> = [this.selectedEducationLevel.Id];
    let formatedAcademicLevelIds: Array<any> = [];
    this.selectedAcademicLevelItem.forEach(element => {
      formatedAcademicLevelIds.push(element.Id)
    });
    this.apolloService.mutate({
      mutation: gql`
      mutation ($academicLevelIds: [Int]!) {
     NewUserAcademicLevels(academicLevelIds: $academicLevelIds)
      }
      `,
      variables: {
        "academicLevelIds": formatedAcademicLevelIds,
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response: any) => {
        this.loadingService.emitChange(false);
        this.getSubjects(nextCallback)
        //nextCallback.emit()
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
    
   // this.getSubjects(nextCallback);
    //this.registrationStateStep = StudentRegisterStepEnum.SUBJECT;
  }
  getSubjects(nextCallback: any) {
    let formatedAcademicLevelIds: Array<any> = [];
    this.selectedAcademicLevelItem.forEach(element => {
      formatedAcademicLevelIds.push(element.Id)
    });
    this.apolloService.query({
      query: gql`
      query ($academicLevelId: [Int!]) {
        MultipleLevelAcademicCourses(AcademicLevelId: $academicLevelId) {
            Id
            CreatedAt
            UpdatedAt
            DeletedAt
            AcademicLevelId
            Name
        }
    }  
      `,
      variables: {
        "academicLevelId": formatedAcademicLevelIds
      }

    }).subscribe({
      next: (response: any) => {
        let subjectList: Array<any> = response?.data['MultipleLevelAcademicCourses'];
        // this.subjects = subjectList ? subjectList : [];
        // this._subjects = subjectList ? subjectList : [];
        this.originalSubjectListItems = subjectList;
        this.subjectListItems = subjectList;
        this.filteredSubjectListItem.push(subjectList[0]);
       
        this.loadingService.emitChange(false);
        nextCallback.emit();
        this.filterSubjectList();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  registerSubject(nextCallback: any){
      if (this.filteredSubjectListItem.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir la matière dont vous avez besoins d\'aide!' });
      return;
    }

    let formatedCoursesIds: Array<any> = [];
    this.filteredSubjectListItem.forEach(element => {
      formatedCoursesIds.push({
        "CourseId": element.Id
      })
    });


    this.apolloService.mutate({
      mutation: gql`
      mutation ($courses :  [UserAcademicCourseInput]!) {
        NewUserAcademicCourses(courses: $courses)
    }
      `,
      variables: {
        "courses": formatedCoursesIds
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
    this.apolloService.mutate({
      mutation: gql`
      mutation ($coursesPreferences: UserAcademicCoursePreferenceInput!)  {
        UpdAcademicCoursePreference(coursesPreferences: $coursesPreferences) {
            Id
            CreatedAt
            UpdatedAt
            DeletedAt
            UserId
            IsOnline
        }
    }
    
      `,
      variables: {
        "coursesPreferences":  {
          "IsOnline" : this.selectedcourseType.value
      }
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response: any) => {
        this.loadingService.emitChange(false);
        nextCallback.emit();
      },
      error: (e) => {
        nextCallback.emit();
        // this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }


  selectedImageSrc: string = "assets/image/file-upload.svg";
  selectedVideoSrc: string  = "assets/image/file-upload.svg";
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
  cvName: string = ""
  onCvSelected(event: any) {
    const file = event.target?.files[0];
    if (event.target.files.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter un fichier valide!' });
      return;
    }
    let extension: string = file?.name.substring(file?.name.lastIndexOf('.') + 1);
    
    if (!environment.accepted_cv.includes(extension.toLowerCase())) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter un fichier  valide!' });
      return;
    }

    this.uploadForm?.get('cv')?.setValue(file);
    this.cvName = file.name;
   // const reader = new FileReader();
    // reader.onload = () => {
    //   this.selectedImageSrc = reader.result as string;
    // }
    // reader.readAsDataURL(file);

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
      this.cvName  = "";
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validationt!', detail: 'Veuillez ajouter une photo!' });
    }
  }

  registerCv(nextCallback: any){
    let formData = new FormData();
    let fileValue = this.uploadForm?.get("cv")?.value;
    if (fileValue) {
      formData.append('documentType', JSON.stringify(UploadTypeEnum.CV));
      formData.append('file', fileValue);
      
      this.uploadService.Upload(false, formData).subscribe({
        next: (resp: HttpResponse<any>)=>{
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
    // this.loadingService.emitChange(true);
    // setTimeout(() => {
    //   this.loadingService.emitChange(false);
      
    //  nextCallback.emit();
    // }, 1000);
    this.apolloService.mutate({
      mutation: gql`
      mutation ($profile: UserInput!) {
        UpdateMyProfile(profile: $profile) {
            Id
            CreatedAt
            UpdatedAt
            DeletedAt
            Name
            FamilyName
            NickName
            Email
            Matricule
            Age
            BirthDate
            Sex
            Lang
            Status
            ProfileImageXid
            Description
            CoverText
            Profile
            ExperienceDetail
            AdditionalDescription
            AddOnTitle
        }
    }
      `,
      variables: {
        "profile": {
          "Profile": this.descriptionPresentation,
          "ExperienceDetail": this.descriptionExperience,
          "AdditionalDescription": this.descriptionMotivation
      }
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
      "name":  "première essaie",
      "renumeration": "0" , 
      "editable": true, 
      "type": 'number'
    },
    {
     "name":  "0-20h",
     "renumeration" : "50", 
     "editable": false,
     "type": 'percentage'
    },
    {
     "name":  "21-50h",
     "renumeration":"55", 
     "editable": false,
     "type": 'percentage'
    },
    {
     "name":  "50-200h",
     "renumeration" : "58", 
     "editable": false,
     "type": 'percentage'
    }, 
    {
      "name":"200-400h",
      "renumeration" : "61", 
      "editable": false,
      "type": 'percentage'
    },
    {
      "name":"400h +",
      "renumeration" : "70", 
      "editable": false,
      "type": 'percentage'
    }
  ];
  onRenumerationBlur($event: any){
    if(isNaN($event.value.replace("$", "")) || !$event.value.replace("$", "")){
      $event.value =  `0$`;
    }else{
      $event.value =  `${parseInt($event.value.replace("$", ""))}$`;
    }
  }
  registerRenumeration(nextCallback: any){
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      nextCallback.emit();
    }, 1000);
  }

  registerFinalStep(nextCallback: any){
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      this.router.navigateByUrl("pages/dashboard");
    }, 1000);
  }


  originalAcademicLevelItems: Array<any> = [];
  academicLevelItems: Array<any> = [];

  academicLevelItem: Array<any> = [];
  selectedAcademicLevelItem: Array<any> = [];
  
  filteredAcademicItem: Array<any> = [];
  searchedAcademicLevelItem: string = '';
  viewAcademicLevelLimit: number = 6;
  academicLevelIndex: number = 0;

  onClickAcademicLevelItems(item: any) {
    if(this.academicLevelItem.find(x=>x.Id == item.Id)){
      this.academicLevelItem = this.academicLevelItem.filter(x=>x.Id != item.Id);
    }else{
      this.academicLevelItem.push(item);
    }
  }

  onSelectAcademicLevel(item: any){
    if(this.selectedAcademicLevelItem.includes(item)){
      this.selectedAcademicLevelItem = this.selectedAcademicLevelItem.filter(x=>x.Id != item.Id);
    }else{
      this.selectedAcademicLevelItem.push(item);
    }
  }


  filterAcademicLevel() {
    const searchedEd = this.normalizeString(this.searchedAcademicLevelItem);
    if (!searchedEd.trim()) {
      // If search is empty, show the selected items along with the first 6 items
      this.academicLevelItems = [
        ...this.filteredAcademicItem,
        ...this.originalAcademicLevelItems
          .filter(item => !this.filteredAcademicItem.some(selectedItem => selectedItem.Id === item.Id))
          .slice(0, this.viewAcademicLevelLimit - this.filteredAcademicItem.length)
      ];
      this.academicLevelIndex = 0;
    } else {
      const filteredItems = this.originalAcademicLevelItems.filter(x =>
        this.normalizeString(x.Name).includes(searchedEd)
      );
      // Calculate the number of items to display, considering both selected and filtered items
      const remainingLimit = this.viewAcademicLevelLimit - this.filteredAcademicItem.length;
      this.academicLevelItems = [
        ...this.filteredAcademicItem,
        ...filteredItems
          .filter(item => !this.filteredAcademicItem.some(selectedItem => selectedItem.Id === item.Id))
          .slice(0, remainingLimit)
      ];
    }
  }
  loadMoreAcademicLevel() {
    this.academicLevelItems = [];
    if(this.academicLevelIndex == 0){
      this.academicLevelIndex = this.viewAcademicLevelLimit;
    }
    const nextIndex = this.academicLevelIndex + this.viewAcademicLevelLimit;
    const nextSet = this.originalAcademicLevelItems.slice(this.academicLevelIndex, nextIndex);
    this.academicLevelItems = [...this.academicLevelItems, ...nextSet];
    this.academicLevelIndex = nextIndex;
  }
  
  hasMoreAcademicLevelItems(): boolean {
    return this.academicLevelIndex < this.originalAcademicLevelItems.length;
  }
  getSelectedAcademicBackground(item: any): String {
    if(this.selectedAcademicLevelItem.length > 0 && this.selectedAcademicLevelItem.includes(item)){
      return "bg-green-200";
    }
      return "";
  }







  originalSubjectListItems: Array<any> = [];
  subjectListItems: Array<any> = []
  filteredSubjectListItem: Array<any> = [];
  searchedSubjectListItemItem: string = '';
  viewsubjectListItemlistLimit: number = 6;
  subjectListIndex: number = 0;

  onClickSubjectListItems(item: any) {
    if(this.filteredSubjectListItem.includes(item)){
      this.filteredSubjectListItem = this.filteredSubjectListItem.filter(x=>x.Id != item.Id);
    }else{
      this.filteredSubjectListItem.push(item);
    }
  }

  filterSubjectList() {
    const searchedEd = this.normalizeString(this.searchedSubjectListItemItem);
    if (!searchedEd.trim()) {
      // If search is empty, show the selected items along with the first 6 items
      this.subjectListItems = [
        ...this.filteredSubjectListItem,
        ...this.originalSubjectListItems
          .filter(item => !this.filteredSubjectListItem.some(selectedItem => selectedItem.Id === item.Id))
          .slice(0, this.viewsubjectListItemlistLimit - this.filteredSubjectListItem.length)
      ];
      this.subjectListIndex = 0;
    } else {
      const filteredItems = this.originalSubjectListItems.filter(x =>
        this.normalizeString(x.Name).includes(searchedEd)
      );
      // Calculate the number of items to display, considering both selected and filtered items
      const remainingLimit = this.viewsubjectListItemlistLimit - this.filteredSubjectListItem.length;
      this.subjectListItems = [
        ...this.filteredSubjectListItem,
        ...filteredItems
          .filter(item => !this.filteredSubjectListItem.some(selectedItem => selectedItem.Id === item.Id))
          .slice(0, remainingLimit)
      ];
    }
  }
  


loadMoreSubjectList() {
  this.subjectListItems = [];
  if(this.subjectListIndex == 0){
    this.subjectListIndex = this.viewsubjectListItemlistLimit;
  }
  const nextIndex = this.subjectListIndex + this.viewsubjectListItemlistLimit;
  const nextSet = this.originalSubjectListItems.slice(this.subjectListIndex, nextIndex);
  this.subjectListItems = [...this.subjectListItems, ...nextSet];
  this.subjectListIndex = nextIndex;
}

hasMoreSubjectListItems(): boolean {
  return this.subjectListIndex < this.originalSubjectListItems.length;
}
getSelectedSubjectBackground(item: any): String {
  if(this.filteredSubjectListItem.length > 0 && this.filteredSubjectListItem.includes(item)){
    return "bg-green-200";
  }
  return "";
}
}


