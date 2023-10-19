package com.example.demo;

public class Doctor {
	int id;
	int userid;
	String name;
	String email;
	String totalpatient;
	String img;
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
	String followup;
	String experiance;
	String commission;
	String total;
	int doc_id;
	
	public Doctor() {
		super();
	}
	


	


	public Doctor(int doc_id, String name, String email, String specialist, String experiance,
			String followup, String fee,  String img,String totalpatient, String commission, String total) {
		super();
		this.doc_id = doc_id;
		this.name = name;
		this.email = email;
		this.specialist = specialist;
		this.experiance = experiance;
		
		
		this.followup = followup;
		this.fee = fee;
		this.img = img;
		this.totalpatient = totalpatient;
		this.commission = commission;
		this.total = total;
	}






	public Doctor(int doc_id, String name, String email, String specialist,String experiance, String followup, String fee, String img) {
		super();
		this.doc_id = doc_id;
		this.name = name;
		this.email = email;
		this.specialist = specialist;
		this.experiance = experiance;
		this.followup = followup;
		this.fee = fee;
		this.img = img;
	}



	public Doctor(int id, String serial,  String name, String age, String gender, String address, String specialist, String blood,
			String phone, String date, String fee,
			String consultant,int userid, int doc_id) {
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
		this.userid=userid;
		this.doc_id = doc_id;
	}



	public int getDoc_id() {
		return doc_id;
	}






	public void setDoc_id(int doc_id) {
		this.doc_id = doc_id;
	}






	public String getTotalpatient() {
		return totalpatient;
	}



	public void setTotalpatient(String totalpatient) {
		this.totalpatient = totalpatient;
	}



	public String getCommission() {
		return commission;
	}



	public void setCommission(String commission) {
		this.commission = commission;
	}



	public String getTotal() {
		return total;
	}



	public void setTotal(String total) {
		this.total = total;
	}



	public String getFollowup() {
		return followup;
	}



	public void setFollowup(String followup) {
		this.followup = followup;
	}



	public String getExperiance() {
		return experiance;
	}



	public void setExperiance(String experiance) {
		this.experiance = experiance;
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



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}






	public String getImg() {
		return img;
	}



	public void setImg(String img) {
		this.img = img;
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
