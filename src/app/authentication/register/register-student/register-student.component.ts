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
import { HeaderService } from '../../../@core/services/header.service';
import { GroupedCitiesData } from '../../../@core/datas/grouped-cities.data';
import { DaysData } from '../../../@core/datas/days.data';
import { CourseTypeData } from '../../../@core/datas/course-type.data';
import { SubjectData } from '../../../@core/datas/subjects.data';
import { SchoolLevelData } from '../../../@core/datas/school-level.data';
import { LanguageData } from '../../../@core/datas/language-data';

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
    private headerService: HeaderService
  ) { }
  inputNotValid: boolean = false;

  error_message: string = '';

  email: string = "";
  password: string = "";
  passwordConfirm: string = "";

  registrationProfileInfoReq: RegistrationWithInforeq = new RegistrationWithInforeq();
  registrationStateStep: StudentRegisterStepEnum = StudentRegisterStepEnum.EMAIL;
  loading: boolean = false;
  groupedCities: SelectItemGroup[] | undefined;
  selectedCity: string | undefined;
  selectedlanguage: any = null;
  selectedSchoolLevel: any = null;
  selectedSubject: any = null;
  selectedcourseType: any = null;
  selectedDays: any = null;

  languages: any[] = LanguageData;
  schoolLevels: any[] = SchoolLevelData;
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
      this.registrationStateStep = StudentRegisterStepEnum.SCHOOL_LEVEL
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
    this.selectedSchoolLevel = this.schoolLevels[0];
    this.selectedlanguage = this.languages[0];
    this.selectedSubject = this.subjects[0];
    this.selectedcourseType = this.courseTypes[0];
    this.selectedDays = this.days[0];
    this.groupedCities = GroupedCitiesData;
  }

  registerWithEmail() {
    this.loading = true;
    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_EMAIL,
      variables: {
        input: this.email,
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


  setNewPassword() {
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
}