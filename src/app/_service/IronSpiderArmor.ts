import { Type } from '@angular/core';

export abstract class webCtrll {
    generateUrl(){
        return 'http://localhost:53417/MarkI/';
    }
}
export class warpCtrll extends webCtrll {s
    generateUrl(): string {
        return super.generateUrl() + 'WARP';
    }
}
export class warpWebRequest {
    public jsonData: string;
    public dbRequest: warpDBRequest;
    
    private sysUid: string = '3AE08843-1D07-4DC2-A9FB-931548BDAEE4';

    constructor() {

     }
    userLogin_login(id : string, pw: string)
    {
        var paramzDic = new ParamzDic();

        paramzDic['@id'] = id;
        paramzDic['@pw'] = pw;
        
        this.dbRequest = new warpDBRequest('userLogin_Login', 'GetSingle', DTOTypes.userLogin, paramzDic);
            
        return this;
    }
    loginLog_log(userLoginUid: string, ip: string){
        var paramzDic = new ParamzDic();

        paramzDic['@userLoginUid'] = userLoginUid;
        paramzDic['@ip'] =  ip;
        paramzDic['@systemUid'] =  'EF96A2F8-7848-4856-9485-8ED838B98127';
        
        this.dbRequest = new warpDBRequest('loginLog_create', 'GetSingle', DTOTypes.userLogin, paramzDic);

        return this;
    }
    convertToJson() : string {
        return JSON.stringify(this.dbRequest);
    }
}
export class warpDBRequest {
    _spName : string;
    _methName: string;
    _dtoType: string;
    _paramzDic: ParamzDic;

    constructor(spName: string, methName: string, dtoType: DTOTypes, paramzDic: ParamzDic) {
        this._spName = spName;
        this._methName = methName;
        this._dtoType = DTOTypes[dtoType];    
        this._paramzDic = paramzDic; 
    }
}
enum DTOTypes {
    userLogin
}
export class ParamzDic {
}