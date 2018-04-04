import { Type } from '@angular/core';

export abstract class webCtrll
{
    generateUrl(){
        return 'http://localhost:56757/MarkIArmor/';
    }
}
export class warpCtrll extends webCtrll
{
    generateUrl(): string {
        return super.generateUrl() + 'WARP';
    }
}
export class warpWebRequest
{
    public jsonData: string;
    public dbRequest: warpDBRequest;
    
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
enum DTOTypes{
    userLogin
}
export class ParamzDic {
}