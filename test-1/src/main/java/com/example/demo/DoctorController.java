package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins="http://localhost:4200")
@RestController

public class DoctorController {
	List<DocReport> dList=new ArrayList<>();
	List<Doctor> pList=new ArrayList<>();
			@RequestMapping(value= "/all")
			public List<Doctor> allStudents() {
				DoctorDA d=new DoctorDA();
				pList=d.allStudent();
				return pList;
			}
			@GetMapping(value ="/student/{doc_id}")
			public Doctor getStudentById(@PathVariable("doc_id") int doc_id) {
				Doctor s ;
				System.out.println("dd");
				DoctorDA d = new DoctorDA();
				s=d.studentById(doc_id);
				return s;
			}
			/*@GetMapping(value ="/search/{id}")
			public void id(@PathVariable("id") Student s) {
				
				StudentDA d = new StudentDA();
				
				d.search(s);
			}*/
			@PostMapping(value= "/save")
			public void save(@RequestBody Doctor s) {
				DoctorDA d=new DoctorDA();
				d.insert(s);
				
			}
			@PostMapping(value= "/save1")
			public void save1(@RequestBody Doctor s) {
				DoctorDA d=new DoctorDA();
				d.save(s);
				
			}
			
			@PostMapping(value= "/update")
			public void update(@RequestBody Doctor s) {
				DoctorDA d=new DoctorDA();
				d.update(s);
				
			}
			@DeleteMapping(value= "/delete/{doc_id}")
			public void delete(@PathVariable("doc_id") int doc_id) {
				DoctorDA d=new DoctorDA();
				d.delete(doc_id);
				
			}
			@GetMapping(value ="/specialist")
			public List<String> getSpecialist() {
				DoctorDA d = new DoctorDA();
				return d.specialistName();
			}
			
			@GetMapping(value ="/doctor/{specialist}")
			public List<String> getSpecialistDoctor(@PathVariable("specialist") String spe) {
				DoctorDA d = new DoctorDA();
				return d.doctorName(spe);
			}
			@GetMapping(value ="/doc/{name}")
			public Doctor getdocIdByName(@PathVariable("name") String name) {
				Doctor s ;
				System.out.println("dd");
				DoctorDA d = new DoctorDA();
				s=d.docIdByName(name);
				return s;
			}
			@GetMapping(value ="/doclogin/{doc_id}")
			public List<Doctor> getDoctorLoginById(@PathVariable("doc_id") int doc_id) {
				List<Doctor> pList=new ArrayList<>();
				
				DoctorDA d = new DoctorDA();
				pList = d.doctorloginByid(doc_id);
				return pList;
			}
			
			@GetMapping(value ="/docAppinfo/{doc_id}")
			public List<Doctor>  docApp(@PathVariable("doc_id") int doc_id) {
				List<Doctor> pList=new ArrayList<>();
				
				DoctorDA d = new DoctorDA();
				pList = d.docApp(doc_id);
				return pList;
			}
					
		
			
			@GetMapping(value ="/referDoctor/{name}")
			public List<String> getReferDoctor(@PathVariable("name") String name) {
				DoctorDA d = new DoctorDA();
				return d.referDoctor(name);
			}
			
			List<DocReport> d=new ArrayList<>();
			@RequestMapping(value= "/docReport")
			public List<DocReport> doctorRepoet() {
				DoctorDA d=new DoctorDA();
				dList=d.doctorReport();
				return dList;
			}

}
