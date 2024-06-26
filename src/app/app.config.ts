import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
