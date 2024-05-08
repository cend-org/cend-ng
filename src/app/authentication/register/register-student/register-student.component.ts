import { Component } from '@angular/core';
import { StudentRegisterStepEnum } from '../../../@core/enumerations/student-register-step.enum';
import { SelectItemGroup } from 'primeng/api';
import { ValidationService } from '../../../@core/services/validation.service';
import { RegistrationWithEmailreq, RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { Apollo, gql } from 'apollo-angular';
import { LOGIN, PASSWORD, REGISTRATION } from '../../../services/graphs/auth.graph';
import { LocalStorageService } from '../../../@core/services/local-storage.service';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '../../../@core/services/header.service';
import { GroupedCitiesData } from '../../../@core/datas/grouped-cities.data';
import { DaysData } from '../../../@core/datas/days.data';
import { CourseTypeData } from '../../../@core/datas/course-type.data';
import { SubjectData } from '../../../@core/datas/subjects.data';
import { SchoolLevelData } from '../../../@core/datas/school-level.data';
import { LanguageData } from '../../../@core/datas/language-data';
import { SexEnum } from '../../../@core/enumerations/sex.enum';
import { Sex } from '../../../@core/datas/sex.data';
import { EDUCATION_SCHOOL } from '../../../services/graphs/education.school.graph';
import { EDUCATION_LEVEL } from '../../../services/graphs/education.level.graph';
import { DocumentNode } from 'graphql';
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
    private toastrService: ToastrService,
    private headerService: HeaderService, 
    private authService: AuthService,
  ) { }
  inputNotValid: boolean = false;

  error_message: string = '';

  email: string = "";
  password: string = "";
  passwordConfirm: string = "";
  name: string = "";
  familyName: string = "";
  birthDate: Date = new Date();
  nickName: string = "";


  registrationProfileInfoReq: RegistrationWithInforeq = new RegistrationWithInforeq();
  registrationStateStep: StudentRegisterStepEnum = StudentRegisterStepEnum.EMAIL;
  loading: boolean = false;
  groupedCities: SelectItemGroup[] | undefined;
  selectedCity: string | undefined;
  selectedlanguage: any = null;
  selectedEducationLevel: any = null;
  selectedSubject: any = null;
  selectedcourseType: any = null;
  selectedDays: any = null;
  selectedSex: any = null;



  sex: any[] = Sex;
  languages: any[] = LanguageData;
  educationLevels: any[] = [];
  subjects: any[] = SubjectData;
  courseTypes: any[] = CourseTypeData;
  days: any[] = DaysData;



  nextStep(current: string) {

    if (current == "OTP") {
      this.registrationStateStep = StudentRegisterStepEnum.PASSWORD
    }

    if (current == "PASSWORD") {
      this.registrationStateStep = StudentRegisterStepEnum.ABOUT
    }

    if (current == "ABOUT") {
      this.registrationStateStep = StudentRegisterStepEnum.LANGUAGE
    }

    if (current == "LANGUAGE") {

      this.registrationStateStep = StudentRegisterStepEnum.SCHOOL_LEVEL;

    }
    if (current == "SCHOOL_LEVEL") {
      this.registrationStateStep = StudentRegisterStepEnum.SUBJECT
    }
    if (current == "SUBJECT") {
      this.registrationStateStep = StudentRegisterStepEnum.COURSE_TYPE
    }
    if (current == "COURSE_TYPE") {
      this.registrationStateStep = StudentRegisterStepEnum.AVAILABILITY
    }
    if (current == "AVAILABILITY") {
      this.registrationStateStep = StudentRegisterStepEnum.SUGGESTED_TUTOR
    }
  }

  ngOnInit(): void {
    this.getEducationLevel();
    //this.getSubjects();

    this.selectedEducationLevel = this.educationLevels[0];
    this.selectedlanguage = this.languages[0];
    this.selectedSubject = this.subjects[0];
    this.selectedcourseType = this.courseTypes[0];
    this.selectedDays = this.days[0];
    this.groupedCities = GroupedCitiesData;
    this.selectedSex = Sex[0];
  }

  registerWithEmail() {
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
        this.inputNotValid = true;
        this.error_message = e.message;
        this.loading = false
      }
    });
  }


  registerNewPassword() {
    if (this.password != this.passwordConfirm) {
      this.toastrService.error("les mots de passes ne sont pas conforme!");
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
        this.toastrService.error('', e.message);
        this.loading = false;
      }
    });
  }


  registerAboutInfo() {
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
        this.registrationStateStep = StudentRegisterStepEnum.LANGUAGE;
        this.loading = false
      },
      error: (e) => {
        this.toastrService.error('', e.message);
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
        this.toastrService.error('', e.message);
        this.loading = false;
      }
    });
  }

  registerEducationLevel() {
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
        this.toastrService.error('', e.message);
        this.loading = false;
      }
    });
  }
  registerSubject() {
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
        this.toastrService.error('', e.message);
        this.loading = false;
      }
    });
  }
  registerCourseType(){
    //this.loading = true;
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
        this.toastrService.error('', e.message);
        this.loading = false;
      }
    });
  }

  registerAvailability(){
    
  }
}