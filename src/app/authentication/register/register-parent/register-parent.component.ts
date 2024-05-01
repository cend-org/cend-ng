import { Component } from '@angular/core';
import { ParentRegisterStepEnum } from '../../../@core/enumerations/parent-register-step.enum';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-register-parent',
  templateUrl: './register-parent.component.html',
  styleUrl: './register-parent.component.scss'
})
export class RegisterParentComponent {
  registrationStateStep: ParentRegisterStepEnum = ParentRegisterStepEnum.EMAIL
  groupedCities: SelectItemGroup[] | undefined;
  selectedCity: string | undefined;




  nextStep(current: string){
    if (current == "EMAIL"){
      this.registrationStateStep = ParentRegisterStepEnum.OTP
    }

    if (current == "OTP"){
      this.registrationStateStep = ParentRegisterStepEnum.PASSWORD
    }

    if (current == "PASSWORD"){
      this.registrationStateStep = ParentRegisterStepEnum.ABOUT
    }
    if (current == "ABOUT"){
      this.registrationStateStep = ParentRegisterStepEnum.SUGGESTED_TUTOR
    }

  }

  ngOnInit(): void {
    this.groupedCities = [
      {
          label: 'Germany',
          value: 'de',
          items: [
              { label: 'Berlin', value: 'Berlin' },
              { label: 'Frankfurt', value: 'Frankfurt' },
              { label: 'Hamburg', value: 'Hamburg' },
              { label: 'Munich', value: 'Munich' }
          ]
      },
      {
          label: 'USA',
          value: 'us',
          items: [
              { label: 'Chicago', value: 'Chicago' },
              { label: 'Los Angeles', value: 'Los Angeles' },
              { label: 'New York', value: 'New York' },
              { label: 'San Francisco', value: 'San Francisco' }
          ]
      },
      {
          label: 'Japan',
          value: 'jp',
          items: [
              { label: 'Kyoto', value: 'Kyoto' },
              { label: 'Osaka', value: 'Osaka' },
              { label: 'Tokyo', value: 'Tokyo' },
              { label: 'Yokohama', value: 'Yokohama' }
          ]
      }
  ];
  }
}
