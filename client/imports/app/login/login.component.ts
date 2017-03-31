import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from "rxjs";
import { LoginModel } from "../../../../both/login/login.model";
import { LoginService } from "./login.service";
import template from "./login.component.html";
import style from "../../../styles/main.scss";

@Component({
  selector: "login-meteor",
  template,
  styleUrls: ["../../../styles/main.scss"]
})
export class LoginComponent implements OnInit {
    email:string;
    pass:string;
    loginModel:LoginModel;
    loginFG:FormGroup;

    constructor(
        private fb: FormBuilder
        ,private loginService: LoginService
        ) {
    }

    ngOnInit() {
        this.loginFG = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(2)]],
        pass: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    login(){
        this.loginService.login(this.email,this.pass)
        .subscribe(res=>{
            console.log("LoginComponent.login res",res)
        })
    }

    signup(){
        this.loginService.signup(this.loginModel)
        .subscribe(res=>{
            console.log("LoginComponent.register res",res)
        })
    }

    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        console.log("onSubmit value",value)
        console.log("onSubmit valid",valid)
    }
    
}
