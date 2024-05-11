import { Component } from '@angular/core';
import { StudentRegisterStepEnum } from '../../../@core/enumerations/student-register-step.enum';
import { MessageService, SelectItemGroup } from 'primeng/api';
import { ValidationService } from '../../../@core/services/validation.service';
import { RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { Apollo, gql } from 'apollo-angular';
import { PASSWORD, REGISTRATION } from '../../../services/graphs/auth.graph';
import { LocalStorageService } from '../../../@core/services/local-storage.service';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '../../../@core/services/header.service';
import { GroupedCitiesData } from '../../../@core/datas/grouped-cities.data';
import { DaysData } from '../../../@core/datas/days.data';
import { CourseTypeData } from '../../../@core/datas/course-type.data';
import { SubjectData } from '../../../@core/datas/subjects.data';
import { LanguageData } from '../../../@core/datas/language-data';
import { Sex } from '../../../@core/datas/sex.data';
import { UserTypeEnum } from '../../../@core/enumerations/user-type.enum';
import { AuthService } from '../../../@core/services/auth.service';

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
    private headerService: HeaderService, 
    private authService: AuthService,
    private messageService: MessageService
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
    this.getEducationLevel();
    //this.selectedDays = this.days[0];
    this.groupedCities = GroupedCitiesData;
  }

  registerWithEmail() {
    if(!this.validationService.checkEmail(this.email)){
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier vôtre email!' });
      return;
    }
    this.loading = true;
    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_EMAIL,
      variables: {
        input: this.email,
        as: UserTypeEnum.STUDENT
      },
    }).subscribe({
      next: (response) => {
        let resp: any = response.data;
        if (resp) {
          this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["registerWithEmail"]);
          this.registrationStateStep = StudentRegisterStepEnum.PASSWORD;
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
        this.registrationStateStep = StudentRegisterStepEnum.ABOUT;
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
        this.registrationStateStep = StudentRegisterStepEnum.SCHOOL_LEVEL;
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
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir vôtre niveau scolaire!' });
      return;
    }


    this.getSubjects();
    this.registrationStateStep = StudentRegisterStepEnum.SUBJECT;
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
        this.registrationStateStep = StudentRegisterStepEnum.COURSE_TYPE;
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
        this.registrationStateStep = StudentRegisterStepEnum.AVAILABILITY;
        this.loading = false
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false;
      }
    });
  }
  availabilityFrom: Date | undefined;
  availabilityWhere:Date | undefined;

  registerAvailability(){
    if (!this.availabilityFrom || !this.availabilityWhere || !this.selectedDays) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez verifier votre disponibilite ' });
      return;
    }
    this.registrationStateStep = StudentRegisterStepEnum.SUGGESTED_TUTOR;
  }
}