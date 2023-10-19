package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(value="http://localhost:4200")
@RestController

public class RegisterController {
	@PostMapping(value= "/reg1")
	public boolean reg(@RequestBody Register s) {
		RegisterDA d=new RegisterDA();
		d.reg(s);
		return true;
	}
	@PostMapping(value="/login")
	public Register save(@RequestBody Register s1){
		RegisterDA d=new RegisterDA();
		return d.check(s1);
	}
	@GetMapping(value ="/register/{name}/{pass}")
	public Register getRegisterById(@PathVariable("name") String name, @PathVariable("pass") String pass) {
		Register s ;
		System.out.println("bb");
		RegisterDA d = new RegisterDA();
		s=d.registerById(name, pass);
		return s;
	}

	@GetMapping(value ="/idInfo/{id}")
	public Register getptientinfoById(@PathVariable("id") int id) {
		Register s ;
		System.out.println("bb");
		RegisterDA d = new RegisterDA();
		s=d.ptientinfoById(id);
		return s;
	}

}
