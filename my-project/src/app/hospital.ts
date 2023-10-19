export class Hospital {
    id?:any;
   
    fname?:any;
    name?:any;
    age?:any;
    gender?:any;
    address?:any;
    blood?:any;
    phone?:any;
    admitdate?:any;
    unit?:any;
    addoc?:any;
    seat?:any;

    constructor(id:any,name:any,fname:any,phone:any,age:any,gender:any,blood:any,address:any,addoc:any,unit:any,admitdate:any,seat:any){
        this.id=id;
        this.name=name;
        this.fname=fname;
        this.phone=phone;
        this.age=age;
        this.gender=gender;
        this.blood=blood;
        this.address=address;

        this.addoc=addoc;
        this.unit=unit;
        this.admitdate=admitdate;
        this.seat=seat;
        
        
       
    }
}
