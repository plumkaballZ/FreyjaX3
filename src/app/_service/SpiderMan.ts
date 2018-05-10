import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, RequestOptionsArgs, } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { webCtrll, warpWebRequest} from './IronSpiderArmor';


 @Injectable()
 export class WebShooter
 {
    constructor(private http: Http) {
    }

    get(controller: webCtrll, warpRequest: warpWebRequest,options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        
        options = { params: { jsonData:  warpRequest.convertToJson() } };

        return this.http.get(controller.generateUrl(), this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do((res: any) => { 
                if(res.status < 200 || res.status >= 300) {
                    throw new Error('This request has failed ' + res.status);
                  } 
             }, (error: any) => { console.log('error') })
            .map((res: any) =>  {
                return res.json();
              })
            .finally(() => {
            }); 
        }

    post(controller: webCtrll, warpRequest: warpWebRequest, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();

        let body = JSON.stringify(warpRequest);
        
        return this.http.post(controller.generateUrl(), body, this.requestOptions(options))
        .catch(this.onCatch.bind(this))
        .do((res: any) => {
            if(res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
              }
             }, (error: any) => { console.log('error') })
        .map((res: any) =>  {
            return res.json();
          })
        .finally(() => {
        });
        }

    put(controller: webCtrll, warpRequest: warpWebRequest, options?: RequestOptionsArgs): Observable<any> {
        
        this.requestInterceptor();

        let body = JSON.stringify(warpRequest);

        return this.http.put(controller.generateUrl(), body, this.requestOptions(options))
        .catch(this.onCatch.bind(this))
        .do((res: any) => { console.log('do') }, (error: any) => { console.log('error') })
        .map((res: any) =>  {
            return res.json();
          })
        .finally(() => {
        });
    }
    
    delete(controller: webCtrll, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return this.http.delete(controller.generateUrl(), this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do((res: Response) => {}, (error: any) => {})
            .finally(() => {});
        }

    private requestInterceptor(): void {
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.of(error);        
    }
    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {  
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            const user = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : null;
            options.headers = new Headers({
                'Content-Type': 'application/json'
              });
        }
        return options;
    }
   
  
     public getIpCliente(): Observable<any> {
         return this.http.get('https://api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK') 
         .map((res:any) => {
             let ipVar = res.text();
             let num = ipVar.indexOf(":");
             let num2 = ipVar.indexOf("\"});");
             ipVar = ipVar.slice(num+2, num2);
             return ipVar.toString(); }); 
  }
}
