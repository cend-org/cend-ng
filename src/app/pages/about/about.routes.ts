import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { OurMissionComponent } from "./our-mission/our-mission.component";
import { StrongPointComponent } from "./strong-point/strong-point.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
        children: [
            {
                path: '',
                redirectTo: 'about-us',
                pathMatch: 'full',
              },
              {
                path: 'about-us',
                component: AboutUsComponent
              },
              {
                path: 'our-mission',
                component: OurMissionComponent
              },
              {
                path: 'strong-points',
                component: StrongPointComponent
              },
              {
                path: 'how-it-works',
                component: HowItWorksComponent
              },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AboutRoutingModule { }