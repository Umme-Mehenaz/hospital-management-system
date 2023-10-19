package com.example.demo.count;

public class BillDetails {
	int id;
	int billid;
	int tid;
	String tname;
	 String price;
	
	
	
	public BillDetails() {
		super();
	}



	public BillDetails(int id, int billid, int tid, String tname, String price) {
		super();
		this.id = id;
		this.billid = billid;
		this.tid = tid;
		this.tname = tname;
		this.price = price;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public int getBillid() {
		return billid;
	}



	public void setBillid(int billid) {
		this.billid = billid;
	}



	public int getTid() {
		return tid;
	}



	public void setTid(int tid) {
		this.tid = tid;
	}



	public String getTname() {
		return tname;
	}



	public void setTname(String tname) {
		this.tname = tname;
	}



	public String getPrice() {
		return price;
	}



	public void setPrice(String price) {
		this.price = price;
	}
	
	
	
	

}
