import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { StrongPointComponent } from './strong-point/strong-point.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutRoutingModule } from './about.routes';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    AboutComponent,
    AboutUsComponent,
    OurMissionComponent,
    StrongPointComponent,
    HowItWorksComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    DividerModule
  ]
})
export class AboutModule { }
