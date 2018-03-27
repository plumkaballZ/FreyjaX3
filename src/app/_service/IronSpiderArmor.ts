export abstract class webCtrll
{
    generateUrl(){
        return 'http://localhost:64486/MarkIArmor/';
    }
}
export class valuesCtrll extends webCtrll
{
    generateUrl(): string {
        return super.generateUrl() + 'values';
    }
}
export class userzCtrll extends webCtrll
{
    generateUrl(): string {
        return super.generateUrl() + 'userz';
    }
}
export class IronWebRequest
{
    public jsonStr: string;
    
    constructor(json: string) {
        this.jsonStr = json;
    }
}