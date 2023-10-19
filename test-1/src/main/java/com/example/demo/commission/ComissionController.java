package com.example.demo.commission;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DocReport;


@CrossOrigin(origins="http://localhost:4200")
@RestController

public class ComissionController {
	List<Comission> dList=new ArrayList<>();
	List<Comission> d=new ArrayList<>();
	@RequestMapping(value= "/docComision")
	public List<Comission> doctorComision() {
		ComissionDA d=new ComissionDA();
		dList=d.doctorComision();
		return dList;
	}

}
