package com.example.demo.count;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Doctor;
import com.example.demo.DoctorDA;



@CrossOrigin(origins="http://localhost:4200")
@RestController

public class PCountController {
	@PostMapping(value= "/admit")
	public void admit(@RequestBody PCount s) {
		PCountDA d=new PCountDA();
		d.admit(s);
		
	}
	
	
	@GetMapping(value ="/admitInvoice")
	public PCount getStudentById() {
		PCount s ;
		System.out.println("dd");
		PCountDA d = new PCountDA();
		s=d.admitInvoice();
		return s;
	}

}
