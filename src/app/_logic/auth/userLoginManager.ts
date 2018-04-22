import { Injectable } from '@angular/core'
import { userLogin } from "../../_model/userLogin";

export class userLoginManager {
    
    private tokenKey : string = 'usrLgn';

    public saveUser(userLogin: userLogin) {
        userLogin.savedAt = (new Date()).getTime() + 100;
        localStorage.setItem(this.tokenKey, JSON.stringify(userLogin));
    }
    public getUser() : userLogin {
        return JSON.parse(localStorage.getItem(this.tokenKey)) as userLogin;
    }
    public removeUser() {
        localStorage.removeItem(this.tokenKey);
    }
    get hasAccsess(): boolean{
        
        try {
            let userLogin = this.getUser();
            if(userLogin && userLogin.lvl > 0) return true;
         }
         catch(err) {
             console.error(err);
         }
        return false;
    }
}