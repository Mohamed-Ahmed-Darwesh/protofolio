import Aura from '@primeng/themes/aura'
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { NgxSpinnerModule } from "ngx-spinner";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideToastr, ToastrModule } from 'ngx-toastr'
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    }),
    provideAnimations(),
    provideToastr(),
    importProvidersFrom(NgxSpinnerModule , ToastrModule.forRoot({
      timeOut: 1500,
      progressBar: true ,
      preventDuplicates:true,
      resetTimeoutOnDuplicate:true,
      extendedTimeOut:1,
    }),),
    ]
};
