import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';
import { User } from './user';
import { Student1 } from './student1';
import { Student2 } from './student2';
import { Diagnosis } from './diagnosis';
import { Hospital } from './hospital';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  [x: string]: any;
  private url = 'http://localhost:8080';
  constructor(private client: HttpClient) { }
  
  ngOnInit(){
    this.url = 'http://localhost:8080/all';
  }

  getStudents(): Observable<Object> {
    this.url = 'http://localhost:8080/all';
    return this.client.get(this.url);
  }
  
  getAppointment(): Observable<Object> {
    this.url = 'http://localhost:8080/al';
    return this.client.get(this.url);
  }
  appointmentByUserId(userid: any): Observable<Student1>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Student1>(`${this.url}userappointment/${userid}`)
  }
  getStudentById({ doc_id }: { doc_id: number; }): Observable<Student>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Student>(`${this.url}student/${doc_id}`)
  }
  getAppiontmentById (id: any): Observable<Student1>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Student1>(`${this.url}appointment/${id}`)
  }
  getRegisterById( name: any, password: any ): Observable<Student2>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Student2>(`${this.url}register/${name}/${password}`)
  }

  insertStudent(student: Student) {
    this.url = 'http://localhost:8080/save';
    return this.client.post(this.url, student);
  }
  insertStudent1(student: Student) {
    this.url = 'http://localhost:8080/save1';
    return this.client.post(this.url, student);
  }
  insertStudent2(Student2: Student2) {
    this.url = 'http://localhost:8080/reg1';
    return this.client.post(this.url, Student2);

  }
update(student: Student) {
    this.url = 'http://localhost:8080/update';
    return this.client.post(this.url, student);
  }
  delete(doc_id :any) {
    this.url = 'http://localhost:8080/delete/'+doc_id;
    return this.client.delete(this.url);
  }
  loginCheck(user: User): Observable<User> {
    this.url = 'http://localhost:8080/';
    return this.client.post<User>(`${this.url}login1`, user);
  }
  loginCheck1(Student2: Student2): Observable<Student2> {
    this.url = 'http://localhost:8080/';
    return this.client.post<Student2>(`${this.url}login`, Student2);
  }
  updated(Student1: Student1) {
    this.url = 'http://localhost:8080/updated';
    return this.client.post(this.url, Student1);
  }
  deletep(student1: Student1) {
    this.url = 'http://localhost:8080/deletep';
    return this.client.post(this.url, student1);
  }

  getSpecialist(): Observable<String[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<String[]>(`${this.url}specialist`)
  }
  getSpecialistDoctor(specialist: any): Observable<String[]>{
    this.url = 'http://localhost:8080/';
    return this.client.get<String[]>(`${this.url}doctor/${specialist}`)
  }

  getDocIdByName(name:any): Observable<Student>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Student>(`${this.url}doc/${name}`)
  }
  docloginById(Student: Student): Observable<Student> {
    this.url = 'http://localhost:8080/';
    return this.client.post<Student>(`${this.url}doclogin`, Student);
  }
  docAppInfo(doc_id: any): Observable<Student1>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Student1>(`${this.url}docAppinfo/${doc_id}`)
  }
  

  getDiagnosis(): Observable<Object> {
    this.url = 'http://localhost:8080/allDiagnosis';
    return this.client.get(this.url);
  }

  getDName(): Observable<String[]>{
    this.url = 'http://localhost:8080/dianame/{tname}';
    return this.client.get<String[]>(`${this.url}`)
  }
  getIdInfo(id: any):Observable<Student2> {
    this.url = 'http://localhost:8080/';
    return this.client.get<Student2>(`${this.url}idInfo/${id}`);
  }
  
  getTestList(tname:any): Observable<Object> {
    this.url = 'http://localhost:8080/billList/' + tname;
    return this.client.get(this.url);
  }
  getreferDoctor(name: any):Observable<Object> {
    this.url = 'http://localhost:8080/referDoctor/{name}';
    return this.client.get(this.url);
  }

  getLastVisit(userid: any, docid: any):Observable<any> {
    this.url = 'http://localhost:8080/paitentlastvisit/' + userid + '/' + docid;
    return this.client.get<any>(this.url);
  }

  insertBill(bill: Diagnosis) {
    this.url = 'http://localhost:8080/bill';
    return this.client.post(this.url, bill);
  }

  insertBillDetails(billDetails: Diagnosis) {
    this.url = 'http://localhost:8080/billDetails';
    return this.client.post(this.url, billDetails);
  }

  admit(hospital: Hospital) {
    this.url = 'http://localhost:8080/admit';
    return this.client.post(this.url, hospital);
  }


  getnewBillId():Observable<any> {
    this.url = 'http://localhost:8080/newbillid';
    return this.client.get(this.url);
  }

  searchBill(billid: any): Observable<Diagnosis>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Diagnosis>(`${this.url}searchbillid/${billid}`)
  }

  getBillinfoByInvoice (billid: any): Observable<Diagnosis>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Diagnosis>(`${this.url}billInfoBybillid/${billid}`)
  }
  getBillDinfoByInvoice (billid: any): Observable<Diagnosis>{
    this.url = 'http://localhost:8080/';
    return this.client.get<Diagnosis>(`${this.url}billdInfoBybillid/${billid}`)
  }

  getDoctorReport(): Observable<Object> {
    this.url = 'http://localhost:8080/docReport';
    return this.client.get(this.url);
  }


  getDoctorComision(): Observable<Object> {
    this.url = 'http://localhost:8080/docComision';
    return this.client.get(this.url);
  }
}
