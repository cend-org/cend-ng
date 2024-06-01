import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ParentRegisterStepEnum } from '../../../@core/enumerations/parent-register-step.enum';
import { MessageService, PrimeNGConfig, SelectItemGroup } from 'primeng/api';
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
import { SubjectData } from '../../../@core/datas/subjects.data';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DaysComponent } from '../../../@themes/modals/days/days.component';

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
    private config: PrimeNGConfig,
    public dialogService: DialogService
  ) { }


  ngOnInit(): void {
    this.selectedlanguage = this.languages[0];
    this.config.setTranslation({
      dayNamesMin: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
    });
    //this.getSuggestedTutor("nextCallback");
    //this.getAcademicLevel("s");
    //this.getSubjects("s");
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
  childName: string = "";
  childFamilyName: string = "";



  selectedlanguage: any = null;
  selectedParentLanguage: any = null;
  selectedSex: any = null;

  childEmail: string = "";
  selectedEducationLevel: any = null;
  selectedSubject: any = null;
  selectedcourseType: any = null;
  selectedDays: any = null;


  sex: any[] = Sex;
  languages: any[] = LanguageData;
  subjects: any[] = [];
  courseTypes: any[] = CourseTypeData;
  days: any[] = DaysData;

  _subjects: any[] = [];
  selectedSubjects: any[] = [];

  get SelectedSubjectsNames(): string {
    return this.filteredSubjectListItem.map(item => item.Name).join(', ');
  }
  normalizeString(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
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
      this.languages = LanguageData;
    } else {
      this.languages = this.languages.filter(x =>
        this.normalizeString(x.name).includes(searchedLang)
      );
    }

  }
  onClickLanguage(lang: any) {
    this.selectedlanguage = lang;
  }
  getSelectedLanguageBackground(lang: any): String {
    if (this.selectedlanguage && this.selectedlanguage.code.toLowerCase() == lang.code.toLowerCase()) {
      return "bg-green-200";
    }
    return "";
  }

  registerWithEmail(nextCallback: any) {

    if (!this.validationService.checkEmail(this.email)) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier votre email!' });
      return;
    }
    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_EMAIL,
      variables: {
        email: this.email
      },
    }).subscribe({
      next: (response) => {
        let resp: any = response.data;
        if (resp) {
          this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["NewParent"]['T']);
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

  registerNewPassword(nextCallback: any) {
    if (this.password != this.passwordConfirm) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Mots de passe non identique!' });
      return;
    }

    if (this.password.length <= 0 || this.passwordConfirm.length <= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Les mots de passe ne doivent pas être vide!' });
      return;
    }

    this.apolloService.mutate({
      mutation: PASSWORD.NEW_PASSWORD,
      variables: {
        "password": {
          "Hash": this.password
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

  registerAboutInfo(nextCallback: any) {
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
    if (!this.selectedSex) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre sex!' });
      return;
    }


    if (!this.selectedParentLanguage) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre langue maternelle!' });
      return;
    }



    this.apolloService.mutate({
      mutation: REGISTRATION.WITH_INFO,
      variables: {
        "profile": {
          "Name": this.name,
          "FamilyName": this.familyName,
          "NickName": this.nickName,
          "Sex": this.selectedSex.value,
          "Lang": this.selectedParentLanguage.value,
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
  registerLanguage(nextCallback: any) {
    this.apolloService.mutate({
      mutation: gql`
      mutation ($profile: UserInput! , $studentId: Int!)  {
        UpdateStudentProfileByParent(
            profile: $profile, 
            studentId: $studentId)
      }`,
      variables: {
        "profile": {
          "Lang": this.selectedlanguage.value
        },
        "studentId": this.studentId
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

    this.getAcademicLevel(nextCallback);
  }
  
 
  registerCourseType(nextCallback: any) {
    if (!this.selectedcourseType) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir le type de cours dont vous avez besoins!' });
      return;
    }

    this.apolloService.mutate({
      mutation: gql`
      mutation ($coursesPreferences: UserAcademicCoursePreferenceInput! , $studentId: Int!)  {
        UpdStudentAcademicCoursesPreferenceByParent(
            coursesPreferences: $coursesPreferences
            studentId: $studentId
        )
    }
      `,
      variables: {
        "coursesPreferences": {
          "IsOnline": this.selectedcourseType.value
        },
        "studentId": this.studentId
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
  availabilityTommorrowAt: Date | undefined;
  avalabilityTommorrowDate: Date | undefined;
  availabilityTommorrowHour: Date | undefined;


  registerAvailability(nextCallback: any) {
    if (!this.availabilityTommorrowAt || !this.avalabilityTommorrowDate || !this.availabilityTommorrowHour) {
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

  debug: boolean = false;
  fakeVideo: string = "/assets/video/rabbit.mp4"


  acceptSuggestion(nextCallback: any) {
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      nextCallback.emit();
    }, 1000);
  }

  registerTarification(nextCallback: any) {
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      nextCallback.emit();
    }, 1000);
  }

  gotoDashboard(nextCallback: any) {
    this.loadingService.emitChange(true);
    setTimeout(() => {
      this.loadingService.emitChange(false);
      this.router.navigateByUrl("/pages/dashboard")
    }, 500);
  }

  studentId: any = 0;
  studentEmail: any = "";
  studentMdp: any = "";
  registerChildName(nextCallback: any) {
    if (!this.childName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Le nom votre jeûne est requis!' });
      return;
    }

    if (!this.childFamilyName.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Le prénom votre jeûne est requis!' });
      return;
    }

    this.apolloService.mutate({
      mutation: gql`
      mutation ($name: String! , $familyName: String!) {
        UserStudent(name: $name , familyName: $familyName){
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
        "name": this.childName,
        "familyName": this.childFamilyName
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response: any) => {
        this.studentId = response["data"]["UserStudent"]["Id"];
        this.studentEmail = response["data"]["UserStudent"]["Email"];
        this.studentMdp = response["data"]["UserStudent"]["Matricule"];
        this.loadingService.emitChange(false);
        nextCallback.emit();
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }

  
  originalAcademicLevelItems: Array<any> = [];
  academicLevelItems: Array<any> = []
  academicLevelItem: any = {};
  searchedAcademicLevelItem: string = '';
  viewAcademicLevelLimit: number = 6;
  academicLevelIndex: number = 0;

  onClickAcademicLevelItems(item: any) {
    this.academicLevelItem = item;
  }


  filterAcademicLevel() {
    this.academicLevelItems = [];
    const searchedEd = this.normalizeString(this.searchedAcademicLevelItem);
    if (!searchedEd.trim()) {
      this.academicLevelItems = this.originalAcademicLevelItems.slice(0, this.viewAcademicLevelLimit); 
      this.academicLevelIndex = 0;
    } else {
      const filteredItems = this.originalAcademicLevelItems.filter(x =>
        this.normalizeString(x.Name).includes(searchedEd)
      );
      this.academicLevelItems = filteredItems.slice(0,  this.viewAcademicLevelLimit);
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

    if (this.academicLevelItem && this.academicLevelItem.Name.toLowerCase() == item.Name.toLowerCase()) {
      return "bg-green-200";
    }
    return "";
  }
  getAcademicLevel(nextCallback: any) {
    //this.loadingService.emitChange(true);
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
        //this.educationLevels = educations ? educations : [];
        //this._educationLevels = educations;
        //this.selectedEducationLevel = educations[0];
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

  registerEducationLevel(nextCallback: any) {
    if (!this.academicLevelItem) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez choisir votre niveau scolaire!' });
      return;
    }
    this.apolloService.mutate({
      mutation: gql`
      mutation ($academicLevelId : Int! , $studentId: Int!) {
        SetStudentAcademicLevelByParent(
            AcademicLevelId: $academicLevelId ,
             studentId: $studentId)
    }
    
      `,
      variables: {
        "academicLevelId": this.academicLevelItem.Id,
        "studentId": this.studentId,
      },
      context: {
        headers: this.headerService.Get()
      }
    }).subscribe({
      next: (response: any) => {
        this.loadingService.emitChange(false);
        this.getSubjects(nextCallback);
      },
      error: (e) => {
        this.messageService.add({ severity: 'warn', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
/*
  Subjects begin
*/
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
      "academicLevelId": this.academicLevelItem.Id
    }, context: {
      headers: this.headerService.Get()
    }

  }).subscribe({
    next: (response: any) => {
      let subjectList: Array<any> = response?.data['AcademicCourses'];
      this.originalSubjectListItems = subjectList;
      this.subjectListItems = subjectList;
      this.filteredSubjectListItem.push(subjectList[0]);
      this.filterSubjectList();
      // this.subjects = subjectList ? subjectList : [];
      // this._subjects = subjectList ? subjectList : [];
      this.loadingService.emitChange(false);
      nextCallback.emit();
    },
    error: (e) => {
      this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
      this.loadingService.emitChange(false);
    }
  });
}



registerSubject(nextCallback: any) {
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
    mutation ($courses: [UserAcademicCourseInput]! ,$studentId: Int!)   {
      NewStudentAcademicCoursesByParent(
          courses: $courses,
          studentId: $studentId)
  }
  
    `,
    variables: {
      "studentId": this.studentId,
      "courses": formatedCoursesIds,
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

/*
  Subjects end
*/
suggestedTutor: any = null;
presentationVideo: string = "";
suggestedTutorProfileImage: string = "";
isSuggestedTutor: boolean = true;
tutorId: number = 0;
continueWithoutTutor(nextCallback: any){
  this.isSuggestedTutor = false;
  nextCallback.emit();
}

getAnotherTutor(){
  this.apolloService.query({
    query: gql`
    query ($studentId: Int! , $tutorId: Int!) {
      SuggestOtherTutor(studentId: $studentId , lastTutorId: $tutorId) {
          Id
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
      "studentId": this.studentId,
      "tutorId": this.tutorId
    },
    context: {
      headers: this.headerService.Get()
    }

  }).subscribe({
    next: (response: any) => {
      this.suggestedTutor = response["data"]["SuggestOtherTutor"];
      let suggestedTutorId = response["data"]["SuggestOtherTutor"]['Id'];
      if (suggestedTutorId) {
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
               // nextCallback.emit();
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
     // this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });
     this.loadingService.emitChange(false);
    }
  });
}

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
      "studentId": this.studentId
    },
    context: {
      headers: this.headerService.Get()
    }

  }).subscribe({
    next: (response: any) => {
      this.suggestedTutor = response["data"]["SuggestTutor"];
      let suggestedTutorId = response["data"]["SuggestTutor"]['Id'];
      this.tutorId = response["data"]["SuggestTutor"]['Id'];
      this.isSuggestedTutor = true;
      if (suggestedTutorId) {
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
     // this.messageService.add({ severity: 'warn', summary: 'Erreur lors du recupération de donnée!', detail: e.message });

    // nextCallback.emit();
     this.isSuggestedTutor = false;
     this.loadingService.emitChange(false);
    }
  });
}
}
