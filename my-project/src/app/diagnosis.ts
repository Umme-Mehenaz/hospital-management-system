export class Diagnosis {
billid:any;
    tid:any;
    tname:any;
    price:any;
    id:any;
    bdate:any;
    name:any;
    totalbill:any;
    commision:any;
    subtotal:any;
    consultant:any;

    constructor(billid:any,name:any,id:any,bdate:any,price:any,totalbill:any,commision:any,subtotal:any,tid:any,tname:any,consultant:any){
       this.billid=billid; 
        this.name=name;
        this.id=id;
        this.bdate=bdate;
        this.price=price;
        this.totalbill=totalbill;
        this.commision=commision;
        this.subtotal=subtotal;
        this.tid=tid;
        this.tname=tname;
        this.consultant=consultant;
       
    }

}
