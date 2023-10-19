package com.example.demo.count;

import java.util.List;

public class Bill {
	int billid;
	String name;
	String price;
	int id;
	int tid;
	String commision;
	String totalbill;
	String subtotal;
	String bdate;
	List<BillDetails> test;
	String consultant;
	
	String tname;
	
	
	
	
	



	public Bill(int id, int billid, int tid, String tname, String price) {
		super();
		this.id = id;
		this.billid = billid;
		this.tid = tid;
		this.tname = tname;
		this.price = price;
		
	}
	public Bill() {
		super();
	}


	public Bill(int billid, String name, int id,String bdate,String totalbill, String commision,  String subtotal, String price	,
			List<BillDetails> test,String consultant) {
		super();
		this.billid = billid;
		this.name = name;
		this.id = id;
		this.bdate = bdate;
		
		this.price = price;
		this.totalbill = totalbill;
		this.commision = commision;
		this.subtotal = subtotal;
		
		this.test = test;
		this.consultant = consultant;
	}


	public int getBillid() {
		return billid;
	}


	public void setBillid(int billid) {
		this.billid = billid;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPrice() {
		return price;
	}


	public void setPrice(String price) {
		this.price = price;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getTid() {
		return tid;
	}


	public void setTid(int tid) {
		this.tid = tid;
	}


	public void setCommision(String commision) {
		this.commision = commision;
	}


	public String getCommision() {
		return commision;
	}


	

	public String getTotalbill() {
		return totalbill;
	}


	public void setTotalbill(String totalbill) {
		this.totalbill = totalbill;
	}


	public String getSubtotal() {
		return subtotal;
	}


	public void setSubtotal(String subtotal) {
		this.subtotal = subtotal;
	}


	
	public String getBdate() {
		return bdate;
	}


	public void setBdate(String bdate) {
		this.bdate = bdate;
	}


	public List<BillDetails> getTest() {
		return test;
	}


	public void setTest(List<BillDetails> test) {
		this.test = test;
	}
	public String getConsultant() {
		return consultant;
	}
	public void setConsultant(String consultant) {
		this.consultant = consultant;
	}
	public String getTname() {
		return tname;
	}
	public void setTname(String tname) {
		this.tname = tname;
	}



	
	
	

}
