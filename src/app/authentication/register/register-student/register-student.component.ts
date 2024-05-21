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



  // email: string =``;
  // password: string = "";
  // passwordConfirm: string = "";
  // name: string = "";
  // familyName: string = "";
  // birthDate: any = "";
  // nickName: string = "";


  email: string =`tutor${Math.random().toString(36).substr(2, 9)}@email.com`;
  password: string = "password";
  passwordConfirm: string = "password";
  name: string = "nao";
  familyName: string = "julius";
  birthDate: any = new Date();
  nickName: string = `parent_${Math.random().toString(36).substr(2, 9)}`;

  


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


  _subjects: any[] = [];
  selectedSubjects: any[] = [];

  get SelectedSubjectsNames(): string {
    return this.selectedSubjects.map(item => item.Name).join(', ');
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
       this.getAcademicLevel(nextCallback);
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
  registerLanguage(nextCallback: any){




    //this.getAcademicLevel(nextCallback);
    // this.loadingService.emitChange(true);
    // setTimeout(() => {
    //   this.loadingService.emitChange(false);
      
    //  // nextCallback.emit();
    // }, 1000);
  }
  getAcademicLevel(nextCallback: any) {
    this.loadingService.emitChange(true);
    this.apolloService.query({
      query: gql`query AcademicLevels {
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
        this._educationLevels = educations;
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
    this.apolloService.mutate({
      mutation: gql`
      mutation ($academicLevelId : Int! ) {
        SetUserAcademicLevel(AcademicLevelId: $academicLevelId)
    }
      `,
      variables: {
        //subjectId: this.selectedSubject.Id
        "academicLevelId" : this.selectedEducationLevel.Id
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response: any) => {
        this.loadingService.emitChange(false);
        this.getSubjects(nextCallback);
        //nextCallback.emit();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
    //this.getSubjects(nextCallback);
    //this.registrationStateStep = StudentRegisterStepEnum.SUBJECT;
  }
  getSubjects(nextCallback: any) {

    
    this.apolloService.query({
      query: gql`
      query ($academicLevelId :  Int!) {
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
      }, context: {
        headers: this.headerService.Get()
      }

    }).subscribe({
      next: (response: any) => {
        let subjectList: Array<any> = response?.data['AcademicCourses'];
        this.subjects = subjectList ? subjectList : [];
        this._subjects = subjectList ? subjectList : [];
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
      if (this.selectedSubjects.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir la matière dont vous avez besoins d\'aide!' });
      return;
    }
    let formatedCoursesIds: Array<any> = [];
    this.selectedSubjects.forEach(element => {
      formatedCoursesIds.push({
        "CourseId": element.Id
      })
    });

    this.apolloService.mutate({
      mutation: gql`
      mutation ($courses: [UserAcademicCourseInput]!)  {
        NewUserAcademicCourses(courses: $courses)
    }
      `,
      variables: {
       // subjectId: this.selectedSubject.Id
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
    //let user_id: number = this.authService.GetUserId();

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
        //isOnline: this.selectedcourseType.value
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
    this.getSuggestedTutor(nextCallback);
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      nextCallback.emit();
    }, 1000);

  }

  suggestedTutor: any = null;
  presentationVideo: string = "";
  suggestedTutorProfileImage: string = "";
  getSuggestedTutor(nextCallback: any) {
    this.apolloService.query({
      query: gql`
      query ($studentId: Int!) {
        SuggestTutor(studentId: $studentId) {
            Name
            FamilyName
            NickName
            Email
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
    }`,
      variables: {
        "studentId": this.authService.GetUserId()
      },
      context: {
        headers: this.headerService.Get()
      }

    }).subscribe({
      next: (response: any) => {
        this.suggestedTutor = response["data"]["SuggestTutor"];
        let suggestedTutorId =  response["data"]["SuggestTutor"]['Id'];
        if(suggestedTutorId){
          this.apolloService.query({
            query: gql`query ($userId : Int!) {
              UserVideoPresentation(userId: $userId)
          }
          `,
            variables: {
              "userId": suggestedTutorId
            }, context: {
              headers: this.headerService.Get()
            }
      
          }).subscribe({
            next: (response: any) => {
              this.presentationVideo = response["data"]["UserVideoPresentation"];
              this.apolloService.query({
                query: gql`query ($tutorId : Int!) {
                  UserProfileImageThumb(userId: $tutorId)
              }
              `,
                variables: {
                  "tutorId": suggestedTutorId
                }, context: {
                  headers: this.headerService.Get()
                }
          
              }).subscribe({
                next: (response: any) => {
                  this.suggestedTutorProfileImage = `background-image: url(${response["data"]["UserProfileImageThumb"]})`;
                  this.loadingService.emitChange(false);
                  nextCallback.emit();
                },
                error: (e) => {
                  this.suggestedTutorProfileImage = `background-image: url(assets/image/avatar.svg)`;
                  this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
                  this.loadingService.emitChange(false);
                }
              });
  
            },
            error: (e) => {
              //this.suggestedTutorProfileImage = `background-image: url(assets/image/avatar.svg)`;
              this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
              this.loadingService.emitChange(false);
            }
          });
        }

        this.loadingService.emitChange(false);
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });


    

    
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