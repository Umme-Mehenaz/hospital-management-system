package com.example.demo.count;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Doctor;
import com.example.demo.DoctorDA;

@CrossOrigin(origins="http://localhost:4200")
@RestController

public class DCountController {
	List<DCount> pList=new ArrayList<>();
	@RequestMapping(value= "/allDiagnosis")
	public List<DCount> allDiagnosis() {
		DCountDA d=new DCountDA();
		pList=d.allDiagnosis();
		return pList;
	}

	@GetMapping(value ="/dianame/{tname}")
	public List<String> getSpecialistDoctor() {
		DCountDA d = new DCountDA();
		return d.dName();
	}
	
	@GetMapping(value ="/billList/{tname}")
	public DCount gettestList(@PathVariable("tname")String tname) {
		DCountDA d = new DCountDA();
		return d.testList(tname);
	}
	
	
	
}
