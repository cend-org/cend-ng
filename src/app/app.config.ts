import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { COMMON_PROVIDER } from './@themes/common.provider';
import { graphqlProvider } from './graphql.provider';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './i18n.factory';
import { JsonInterceptor } from './@core/interceptors/json-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    // provideClientHydration(), 
    provideAnimations(), 
    CommonModule,
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JsonInterceptor,
      multi:true
    } ,
    COMMON_PROVIDER, 
    graphqlProvider,
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })),
    // provideToastr({
    //   timeOut: 10000,
    //   positionClass: 'toast-bottom-center',
    //   preventDuplicates: true,
    //   progressBar: true,
    //   easeTime: 300,

    // }),
   // { provide: HTTP_INTERCEPTORS, useClass: JsonInterceptor, multi: true },
  ],
};
