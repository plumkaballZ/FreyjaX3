import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, RequestOptionsArgs, } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/toPromise";

 @Injectable()
 export class WebShooter {
     constructor(private http: Http) {
     }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
         this.requestInterceptor();
         return this.http.get(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do((res: Response) => {}, (error: any) => {})
            .finally(() => {});
    }
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return this.http.post(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do((res: Response) => {}, (error: any) => {})
            .finally(() => {});
    }
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return this.http.put(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do((res: Response) => {}, (error: any) => {})
            .finally(() => {});
    }
    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return this.http.delete(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do((res: Response) => {}, (error: any) => {})
            .finally(() => {});
    }
    private requestInterceptor(): void {
    }
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.of(error);        
    }
    private getFullUrl(url: string): string {
        return '';
    }
    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            const user = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : null;
            options.headers = new Headers({
                'Content-Type': 'application/json',
                'X-Spree-Token': user && user.spree_api_key
              });
        }

        return options;
    }
}
