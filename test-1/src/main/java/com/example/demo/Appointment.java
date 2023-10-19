package com.example.demo;

public class Appointment {
	int id;
	String name;
	
	String serial;
	String age;
	String blood;
	String phone;
	String date;
	String fee;
	String specialist;
	String address;
	String gender;
	String consultant;
	int userid;
	public Appointment() {
		super();
	}
	public Appointment(int id, String serial, String name, String age, String gender, String address, String specialist,
			String blood, String phone, String date, String fee, String consultant,int userid) {
		super();
		this.id = id;
		this.serial = serial;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.specialist = specialist;
		this.blood = blood;
		this.phone = phone;
		this.date = date;
		this.fee = fee;
		this.consultant = consultant;
		this.userid = userid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
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
	public String getSerial() {
		return serial;
	}
	public void setSerial(String serial) {
		this.serial = serial;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getBlood() {
		return blood;
	}
	public void setBlood(String blood) {
		this.blood = blood;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getFee() {
		return fee;
	}
	public void setFee(String fee) {
		this.fee = fee;
	}
	public String getSpecialist() {
		return specialist;
	}
	public void setSpecialist(String specialist) {
		this.specialist = specialist;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getConsultant() {
		return consultant;
	}
	public void setConsultant(String consultant) {
		this.consultant = consultant;
	}
	

}
