export class Student {
   doc_id?:any;
    name?:any;
    email?:any;
    specialist?:any;
    experiance?:any;
    followup?:any;
    fee?:any;
    img?:any;
    totalpatient:any;
    commission:any;
    total:any;
    
    
    

    constructor(doc_id:any,name:any,email:any,specialist:any,experiance:any,followup:any,fee:any,img:any,totalpatient:any,commission:any,total:any){
        this.doc_id=doc_id;
        this.name=name;
        this.email=email;
        this.specialist=specialist;
        this.experiance=experiance;
        this.followup=followup;
        this.fee=fee;
        this.img=img;
        this.totalpatient=totalpatient;
        this.commission=commission;
        this.total=total;
        
    }
}
