package com.example.demo;

public class Register {
	int id;
	String name;
	String email;
	String age;
	String gender;
	String password;
	public Register() {
		super();
	}
	public Register(int id, String name, String email, String age, String gender, String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.age = age;
		this.gender = gender;
		this.password = password;
	}
	
	public Register(int id, String name,String email, String age, String gender) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.age = age;
		this.gender = gender;
	}
	public Register(String string, String string2, String string3) {
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
