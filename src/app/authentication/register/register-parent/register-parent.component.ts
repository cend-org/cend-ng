import { Component, OnInit } from '@angular/core';
import { ParentRegisterStepEnum } from '../../../@core/enumerations/parent-register-step.enum';
import { MessageService, SelectItemGroup } from 'primeng/api';
import { Apollo, gql } from 'apollo-angular';
import { AuthService } from '../../../@core/services/auth.service';
import { HeaderService } from '../../../@core/services/header.service';
import { LocalStorageService } from '../../../@core/services/local-storage.service';
import { ValidationService } from '../../../@core/services/validation.service';
import { PASSWORD, REGISTRATION } from '../../../services/graphs/auth.graph';
import { UserTypeEnum } from '../../../@core/enumerations/user-type.enum';
import { environment } from '../../../environments/environment';
import { LanguageData } from '../../../@core/datas/language-data';
import { Sex } from '../../../@core/datas/sex.data';
import { CourseTypeData } from '../../../@core/datas/course-type.data';
import { LoadingService } from '../../../@core/services/loading.service';
import { DaysData } from '../../../@core/datas/days.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-parent',
  templateUrl: './register-parent.component.html',
  styleUrl: './register-parent.component.scss'
})
export class RegisterParentComponent implements OnInit {

  constructor(
    private validationService: ValidationService,
    private apolloService: Apollo,
    private locaStorageService: LocalStorageService,
    private headerService: HeaderService, 
    private authService: AuthService,
    private messageService: MessageService, 
    private loadingService: LoadingService,
    private router: Router,
  ) { }


  ngOnInit(): void {
   //this.getSubjects('');
  }

  // getEducationLevel(){
  //   this.loading = true;
  //   this.apolloService.query({
  //     query: gql`query {
  //       getEducation {
  //             Id
  //             Name
  //         }
  //     }`,
  //   }).subscribe({
  //     next: (response: any) => {
  //       let educations: Array<any> = response?.data['getEducation'];
  //       this.educationLevels = educations ? educations : [];
  //       this.loading = false
  //     },
  //     error: (e) => {
  //       this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
  //       this.loading = false;
  //     }
  //   });
  // }
  registrationStateStep: ParentRegisterStepEnum = ParentRegisterStepEnum.EMAIL;
  groupedCities: SelectItemGroup[] | undefined;
  selectedCity: string | undefined;
  loading: boolean = false;


  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  name: string = "";
  familyName: string = "";
  birthDate: any = "";
  nickName: string = "";


  selectedlanguage: any = null;
  selectedSex: any = null;
  childName: string ="";
  childFamilyName: string = "";
  selectedEducationLevel: any = null;
  selectedSubject: any = null;
  selectedcourseType: any = null;
  selectedDays: any = null;



  // email: string =`parent_${Math.random().toString(36).substr(2, 9)}@email.com`;
  // password: string = "pwd";
  // passwordConfirm: string = "pwd";
  // name: string = "nao";
  // familyName: string = "julius";
  // birthDate: any = new Date();
  // nickName: string = `parent_${Math.random().toString(36).substr(2, 9)}`;


  sex: any[] = Sex;
  languages: any[] = LanguageData;
  subjects: any[] = [];
  courseTypes: any[] = CourseTypeData;
  educationLevels: any[] = [];
  days: any[] = DaysData;



  // registerWithEmail(){
  //   if(!this.validationService.checkEmail(this.email)){
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier votre email!' });
  //     return;
  //   }
  //   this.loading = true;
  //   this.apolloService.mutate({
  //     mutation: REGISTRATION.WITH_EMAIL,
  //     variables: {
  //       input: this.email,
  //       as: UserTypeEnum.PARENT
  //     },
  //   }).subscribe({
  //     next: (response) => {
  //       let resp: any = response.data;
  //       if (resp) {
  //         this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["registerWithEmail"]);
  //         this.registrationStateStep = ParentRegisterStepEnum.PASSWORD;
  //       };
  //       this.loading = false;
  //     },
  //     error: (e) => {
  //       this.messageService.add({ severity: 'error', summary: 'Erreur lors du traitement!', detail: e.message });
  //       this.loading = false
  //     }
  //   });
  // }
  // registerNewPassword(){
  //   if (this.password != this.passwordConfirm) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Mots de passe non identique!' });
  //     return;
  //   }

  //   if (this.password.length <=0 || this.passwordConfirm.length <=0 ) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Les mots de passe ne doivent pas être vide!' });
  //     return;
  //   }


  //   this.loading = true;
  //   this.apolloService.mutate({
  //     mutation: PASSWORD.NEW_PASSWORD,
  //     variables: {
  //       password: this.password,
  //     },
  //     context: {
  //       headers: this.headerService.Get()
  //     }
  //   }).subscribe({
  //     next: (response) => {
  //       this.registrationStateStep = ParentRegisterStepEnum.ABOUT;
  //       this.loading = false
  //     },
  //     error: (e) => {
  //       this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitemnt!', detail: e.message });
  //       this.loading = false;
  //     }
  //   });
  // }
  // registerAboutInfo() {
  //   if (!this.name.trim()) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'votre nom est requis!' });
  //     return;
  //   }

  //   if (!this.familyName.trim()) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'votre prénom est requis!' });
  //     return;
  //   }


  //   if (!this.birthDate) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Date de naissance invalide!' });
  //     return;
  //   }
    
  //   if (!this.nickName.trim()) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'votre nom d\'utilisateur est requis!' });
  //     return;
  //   }

  //   if (!this.selectedSex) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre sex!' });
  //     return;
  //   }


  //   if (!this.selectedlanguage) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre langue maternelle!' });
  //     return;
  //   }



  //   this.loading = true;
  //   this.apolloService.mutate({
  //     mutation: REGISTRATION.WITH_INFO,
  //     variables: {
  //       Name: this.name,
  //       FamilyName: this.familyName,
  //       NickName: this.nickName,
  //       BirthDate: this.birthDate,
  //       Sex: this.selectedSex.value,
  //       Lang: this.selectedlanguage.value,
  //       Email: this.email,
  //     },
  //     context: {
  //       headers: this.headerService.Get()
  //     }
  //   }).subscribe({
  //     next: (response) => {
  //       this.registrationStateStep = ParentRegisterStepEnum.STUDENT_NAME;
  //       this.loading = false
  //     },
  //     error: (e) => {
  //       this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
  //       this.loading = false;
  //     }
  //   });
  // }
  // registerParentChild(){
  //   if (!this.childName.trim()) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Le nom votre jeûne est requis!' });
  //     return;
  //   }

  //   if (!this.childFamilyName.trim()) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Le prénom votre jeûne est requis!' });
  //     return;
  //   }
  //   this.loading = true;
  //   this.apolloService.mutate({
  //     mutation: REGISTRATION.CHILD_NAME,
  //     variables: {
  //       Name: this.childName,
  //       FamilyName: this.childFamilyName,
  //     },
  //     context: {
  //       headers: this.headerService.Get()
  //     }
  //   }).subscribe({
  //     next: (response) => {
  //       this.registrationStateStep = ParentRegisterStepEnum.STUDENT_SCHOOL_LEVEL;
  //       this.loading = false
  //     },
  //     error: (e) => {
  //       this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
  //       this.loading = false;
  //     }
  //   });
  // }
  // registerEducationLevel() {
  //   if (!this.selectedEducationLevel) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir le niveau scolaire de votre jeûne!' });
  //     return;
  //   }


  //   this.getSubjects();
  //   this.registrationStateStep = ParentRegisterStepEnum.STUDENT_SUBJECT;
  // }

  // getSubjects() {

  //   this.loading = true;
  //   this.apolloService.query({
  //     query: gql`
  //     query getSubjects($id: ID!) {
  //       getSubjects(id: $id) {
  //         Id
  //         Name
  //       }
  //     }`,
  //     variables: {
  //       id: this.selectedEducationLevel.Id
  //     },
  //     context: {
  //       headers: this.headerService.Get()
  //     }

  //   }).subscribe({
  //     next: (response: any) => {
  //       let subjectList: Array<any> = response?.data['getSubjects'];
  //       this.subjects = subjectList ? subjectList : [];
  //       this.loading = false
  //     },
  //     error: (e) => {
  //       this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
  //       this.loading = false;
  //     }
  //   });
  // }
  // registerSubject() {
  //   if (!this.selectedSubject) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir la matière dont votre jeûne a besoins!' });
  //     return;
  //   }

  //   this.loading = true;
  //   this.apolloService.mutate({
  //     mutation: gql`
  //       mutation setUserEducationLevel($subjectId: Int!) {
  //           setUserEducationLevel(subjectId: $subjectId) {
  //             Id,
  //             Name
  //           }
  //       }
  //     `,
  //     variables: {
  //       subjectId: this.selectedSubject.Id
  //     },
  //     context: {
  //       headers: this.headerService.Get()
  //     }
  //   }).subscribe({
  //     next: (response: any) => {
  //       this.registrationStateStep = ParentRegisterStepEnum.COURSE_TYPE;
  //       this.loading = false
  //     },
  //     error: (e) => {
  //       this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
  //       this.loading = false;
  //     }
  //   });
  // }

  // registerCourseType(){
  //   //this.loading = true;
  //   if (!this.selectedcourseType) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir le type de cours dont votre jeûne en a besoins!' });
  //     return;
  //   }
  //   let user_id: number = this.authService.GetUserId();

  //   this.loading = true;
  //   this.apolloService.mutate({
  //     mutation: gql`
  //       mutation setUserCoursePreference($isOnline: Boolean!) {
  //         setUserCoursePreference(isOnline: $isOnline) {
  //             Id,
  //             UserId
  //             IsOnline
  //           }
  //       }
  //     `,
  //     variables: {
  //       isOnline: this.selectedcourseType.value
  //     },
  //     context: {
  //       headers: this.headerService.Get()
  //     }
  //   }).subscribe({
  //     next: (response: any) => {
  //       this.registrationStateStep = ParentRegisterStepEnum.AVAILABILITY;
  //       this.loading = false
  //     },
  //     error: (e) => {
  //       this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
  //       this.loading = false;
  //     }
  //   });
  // }
  // availability: Date[] | undefined;
  // registerAvailability() {
  //   if (!this.availability) {
  //     this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez Ajoutez votre disponibilite!' });
  //     return;
  //   }

  //   this.registrationStateStep = ParentRegisterStepEnum.SUGGESTED_TUTOR;
  // }



  registerWithEmail(nextCallback: any){

    if(!this.validationService.checkEmail(this.email)){
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier votre email!' });
      return;
    }
    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_EMAIL,
      variables: {
        input: this.email,
        as: UserTypeEnum.PARENT
      },
    }).subscribe({
      next: (response) => {
        let resp: any = response.data;
        if (resp) {
          this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["registerWithEmail"]);
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
        password: this.password,
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
        id: 1 //this.selectedEducationLevel.Id
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

  registerChildName(nextCallback: any){
    if (!this.childName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Le nom votre jeûne est requis!' });
      return;
    }

    if (!this.childFamilyName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Le prénom votre jeûne est requis!' });
      return;
    }

    nextCallback.emit(); //eto
    
    this.apolloService.mutate({
      mutation: REGISTRATION.CHILD_NAME,
      variables: {
        Name: this.childName,
        FamilyName: this.childFamilyName,
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response) => {
        this.registrationStateStep = ParentRegisterStepEnum.STUDENT_SCHOOL_LEVEL;
        this.loadingService.emitChange(false);
        nextCallback.emit();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
}
