package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	@PostMapping(value="/login1")
	public User save(@RequestBody User s1){
		UserDA d=new UserDA();
		return d.check(s1);
	}

}
