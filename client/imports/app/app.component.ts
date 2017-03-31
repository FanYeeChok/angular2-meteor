import { Component } from "@angular/core";
import { TranslateService } from 'ng2-translate';
import { Router, NavigationEnd } from '@angular/router';
import template from "./app.component.html";
import style from "./app.component.scss";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
  constructor(translate: TranslateService, private router: Router) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en');

      // scroll to top when router change
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          document.body.scrollTop = 0;
      });
  }
}
