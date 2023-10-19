package com.example.demo;

public class DocReport {
	
	int doc_id;
	String consultant;
	String specialist;
	String fee;
	int user_id;
	String commission;
	public DocReport() {
		super();
	}
	
	public DocReport(int doc_id, String consultant, String specialist, String fee, int user_id, String commission) {
		super();
		this.doc_id = doc_id;
		this.consultant = consultant;
		this.specialist = specialist;
		this.fee = fee;
		this.user_id = user_id;
		this.commission = commission;
	}

	public int getDoc_id() {
		return doc_id;
	}
	public void setDoc_id(int doc_id) {
		this.doc_id = doc_id;
	}
	public String getConsultant() {
		return consultant;
	}
	public void setConsultant(String consultant) {
		this.consultant = consultant;
	}
	public String getSpecialist() {
		return specialist;
	}
	public void setSpecialist(String specialist) {
		this.specialist = specialist;
	}
	public String getFee() {
		return fee;
	}
	public void setFee(String fee) {
		this.fee = fee;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getCommission() {
		return commission;
	}
	public void setCommission(String commission) {
		this.commission = commission;
	}
	
	

}
