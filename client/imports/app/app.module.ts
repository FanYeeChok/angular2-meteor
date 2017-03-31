import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';
import { TranslateModule,TranslateLoader,TranslateStaticLoader } from 'ng2-translate';
//Meteor
import { AccountsModule } from 'angular2-meteor-accounts-ui';
//App
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { DemoDataService } from "./demo/demo-data.service";

import { LoginService } from "./login/login.service";
import { LoginComponent } from "./login/login.component";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '../../../assets/i18n', '.json');
}

const appRoutes: Routes = [
  // {path: '' ,redirectTo: '/home', pathMatch: 'full'}

  //Modules
  // ,{ path: 'sample', component: SampleComponent }
  // ,{path: '**', redirectTo: '/404'}
];

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DemoComponent
    ,LoginComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService
    ,LoginService
  ],
  // Modules
  imports: [
    BrowserModule
    ,FormsModule
    ,ReactiveFormsModule //Used for formBuild, formGoup
    ,RouterModule.forRoot(appRoutes)
    ,TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
    })
    //Meteor
    ,AccountsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
