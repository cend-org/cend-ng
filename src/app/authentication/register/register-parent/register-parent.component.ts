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
    private messageService: MessageService
  ) { }


  ngOnInit(): void {
   this.getEducationLevel();
  }

  getEducationLevel(){
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

  sex: any[] = Sex;
  languages: any[] = LanguageData;
  subjects: any[] = [];
  courseTypes: any[] = CourseTypeData;
  educationLevels: any[] = [];



  registerWithEmail(){
    if(!this.validationService.checkEmail(this.email)){
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier vôtre email!' });
      return;
    }
    this.loading = true;
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
          this.registrationStateStep = ParentRegisterStepEnum.PASSWORD;
        };
        this.loading = false;
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false
      }
    });
  }
  registerNewPassword(){
    if (this.password != this.passwordConfirm) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Mots de passe non identique!' });
      return;
    }

    if (this.password.length <=0 || this.passwordConfirm.length <=0 ) {
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
        this.registrationStateStep = ParentRegisterStepEnum.ABOUT;
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
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Vôtre nom est requis!' });
      return;
    }

    if (!this.familyName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Vôtre prénom est requis!' });
      return;
    }


    if (!this.birthDate) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Date de naissance invalide!' });
      return;
    }
    
    if (!this.nickName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Vôtre nom d\'utilisateur est requis!' });
      return;
    }

    if (!this.selectedSex) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir vôtre sex!' });
      return;
    }


    if (!this.selectedlanguage) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir vôtre langue maternelle!' });
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
        this.registrationStateStep = ParentRegisterStepEnum.STUDENT_NAME;
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false;
      }
    });
  }
  registerParentChild(){
    if (!this.childName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Le nom vôtre jeûne est requis!' });
      return;
    }

    if (!this.childFamilyName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Le prénom vôtre jeûne est requis!' });
      return;
    }
    this.loading = true;
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
        this.registrationStateStep = ParentRegisterStepEnum.STUDENT_NAME;
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
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir le niveau scolaire de votre jeûne!' });
      return;
    }


    this.getSubjects();
    this.registrationStateStep = ParentRegisterStepEnum.STUDENT_SUBJECT;
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
      },
      context: {
        headers: this.headerService.Get()
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
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir la matière dont votre jeûne a besoins!' });
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
        this.registrationStateStep = ParentRegisterStepEnum.COURSE_TYPE;
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false;
      }
    });
  }

  registerCourseType(){
    //this.loading = true;
    if (!this.selectedcourseType) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir le type de cours dont vôtre jeûne en a besoins!' });
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
        this.registrationStateStep = ParentRegisterStepEnum.AVAILABILITY;
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

    this.registrationStateStep = ParentRegisterStepEnum.SUGGESTED_TUTOR;
  }
}
