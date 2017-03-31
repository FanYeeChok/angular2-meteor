import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Observable } from "rxjs";

import { LoginModel } from "../../../../both/login/login.model";

@Injectable()
export class LoginService {

  constructor() {
  }

  public login(email:string,password:string):Observable<any> {
    // let email: string = this.credentials.email;
    // let password: string = this.credentials.password;
    return Observable.fromPromise(
        new Promise<void>((resolve, reject) => {
            Meteor.loginWithPassword(email, password, (error) => {
                if (error) {
                    return reject(error);
                }
                resolve();
            });
        })
    )
  }

  logout(): void {
    Meteor.logout();
  }

  signup(loginModel:LoginModel): Observable<any> {
    return Observable.fromPromise(
        new Promise<void>((resolve, reject) => {
            Accounts.createUser(loginModel, (error) => {
                if (error) {
                    return reject(error);
                }
                resolve();
            });
        })
    )
  }

}
