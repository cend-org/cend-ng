import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StudentRegisterStepEnum } from '../../../@core/enumerations/student-register-step.enum';
import { MenuItem, MessageService, PrimeNGConfig, SelectItemGroup } from 'primeng/api';
import { ValidationService } from '../../../@core/services/validation.service';
import { RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { Apollo, gql, Subscription } from 'apollo-angular';
import { PASSWORD, REGISTRATION } from '../../../services/graphs/auth.graph';
import { LocalStorageService } from '../../../@core/services/local-storage.service';
import { environment } from '../../../environments/environment';
import { HeaderService } from '../../../@core/services/header.service';
import { GroupedCitiesData } from '../../../@core/datas/grouped-cities.data';
import { DaysData } from '../../../@core/datas/days.data';
import { CourseTypeData } from '../../../@core/datas/course-type.data';
import { SubjectData } from '../../../@core/datas/subjects.data';
import { LanguageData } from '../../../@core/datas/language-data';
import { Sex } from '../../../@core/datas/sex.data';
import { UserTypeEnum } from '../../../@core/enumerations/user-type.enum';
import { AuthService } from '../../../@core/services/auth.service';
import { NEW_STUDENT_REGISTRATION } from '../../../services/graphs/student/registration.graph';
import { LoadingService } from '../../../@core/services/loading.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.scss'
})
export class RegisterStudentComponent implements OnInit, AfterViewInit {


  constructor(
    private validationService: ValidationService,
    private apolloService: Apollo,
    private locaStorageService: LocalStorageService,
    private headerService: HeaderService, 
    private authService: AuthService,
    private messageService: MessageService,
    private loadingService: LoadingService,
     private router: Router,
     private config: PrimeNGConfig

  ) {
    
   }
  inputNotValid: boolean = false;



  email: string =``;
  password: string = "";
  passwordConfirm: string = "";
  name: string = "";
  familyName: string = "";
  birthDate: any = "";
  nickName: string = "";


  registrationProfileInfoReq: RegistrationWithInforeq = new RegistrationWithInforeq();
  registrationStateStep: StudentRegisterStepEnum = StudentRegisterStepEnum.EMAIL;
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
  ngOnInit(): void {
    this.config.setTranslation({
      dayNamesMin: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
  });
    this.groupedCities = GroupedCitiesData;
   // this.loadingService.emitChange(false);
  }

  filterLanguage(input: any){
    let searchedLang: string = input.value.toLowerCase();
    this.languages = this.languages.filter(x=>x.name.toLowerCase().startsWith(searchedLang));
    if(!searchedLang.trim()){
      this.languages = LanguageData;
    }
  }
  onClickLanguage(lang: any){
    this.selectedlanguage = lang;
  }
  ngAfterViewInit(){
   // this.loadingService.emitChange(false);
  }
  registerWithEmail(nextCallback: any){

    if(!this.validationService.checkEmail(this.email)){
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier votre email!' });
      return;
    }
    this.apolloService.mutate({
      mutation: gql`
      mutation 
      NewStudent(
              $email: String!,
          ) 
          {
            NewStudent (
                  email: $email ,
              ){
                  T
              }
          }
  `,
      variables: {
        email: this.email,
      },
    }).subscribe({
      next: (response) => {
        let resp: any = response.data;
        if (resp) {
          this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["NewStudent"]["T"]);
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
    //let user_id: number = this.authService.GetUserId();

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
        this.loadingService.emitChange(false);
        nextCallback.emit();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  availabilityFrom: Date | undefined;
  availabilityWhere:Date | undefined;

  registerAvailability(nextCallback: any){
    if (!this.availabilityFrom || !this.availabilityWhere || !this.selectedDays) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez verifier votre disponibilite ' });
      return;
    }
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      nextCallback.emit();
    }, 1000);
    // this.apolloService.mutate({
    //   mutation: gql`
    //     query SuggestTutor($studentId: Int!) {
    //       studentId(studentId: $studentId) {
    //         Name
    //         FamilyName
    //         NickName
    //         Email
    //         Sex
    //         Lang
    //         Status
    //         ProfileImageXid
    //         Description
    //         CoverText
    //         Profile
    //         ExperienceDetail
    //         AdditionalDescription
    //         AddOnTitle
    //         }
    //     }
    //   `,
    //   variables: {
    //     studentId: this.authService.GetUserId()
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

  debug: boolean = false;
  fakeVideo: string = "/assets/video/rabbit.mp4"


  acceptSuggestion(nextCallback: any){
    this.loadingService.emitChange(true);
    
    
    
    setTimeout(() => {
      this.loadingService.emitChange(false);
      nextCallback.emit();
    }, 1000);
  }

  registerTarification(nextCallback: any){
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      nextCallback.emit();
    }, 1000);
  }

  gotoDashboard(nextCallback: any){
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      this.router.navigateByUrl("/pages/dashboard")
    }, 500);
  }

}