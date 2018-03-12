// import { Injectable,  } from "@angular/core";
// import { Headers, Http, RequestOptions, RequestOptionsArgs } from "@angular/http";
// import "rxjs/add/operator/toPromise";

// @Injectable()

// export class WebShooter {
    
//     constructor(private http: Http, defaultOptions: RequestOptions) {
//     }

//     get(url: string, options?: RequestOptionsArgs): Observable<any> {

//       var accessToken;
      
//       return this.http.get('http://localhost:50414/api/_temp', this.getOptions(accessToken)).toPromise() 
//       .then(response => {

//       });
//     }

//     login(userName: string, password: string): Promise<_tmpToken> {        
//         return this.http.post('http://localhost:50414/api/Auth', this.getParams(userName, password), this.getOptions(null))
//         .toPromise()
//         .then(response => {
//                 let token = response.json() as _tmpToken;
//                 if (token.stateCode == 1) this.unlockAccess(token.accessToken);
                
//                 let tokenManager:tknMngr = new tknMngr();
//                 tokenManager.saveTkn(token);
                
//                 return token;
//             })
//     }
//     private unlockAccess(accessToken: string){
//         return this.http.get('http://localhost:50414/api/_temp', this.getOptions(accessToken)).toPromise() 
//         .then(response => {
//         })
//     }
//     private getParams(userName : string, password : string){
//         let params = new URLSearchParams();
//         params.set('UserName', userName)
//         params.set('Password', password)
//         return params.toString();
//     }

//     private getOptions(accessToken: string){
//         let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
//         if(accessToken) headers.set('Authorization', 'Bearer ' + accessToken);
//         return  new RequestOptions({ headers: headers });
//     }
// }