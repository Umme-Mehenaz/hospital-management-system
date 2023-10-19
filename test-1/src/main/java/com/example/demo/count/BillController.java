package com.example.demo.count;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Appointment;
import com.example.demo.AppointmentDA;
import com.example.demo.Doctor;
import com.example.demo.DoctorDA;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BillController {
	
	@PostMapping(value= "/bill")
	public void bill(@RequestBody Bill s) {
		BillDA d=new BillDA();
		d.bill(s);
		
	}
	@PostMapping(value= "/billDetails")
	public void billDetails(@RequestBody BillDetails s) {
		BillDA d=new BillDA();
		d.billDetails(s);
		
	}
	

	@GetMapping(value ="/newbillid")
	public  HashMap<String, String> getnewBillId() {
		BillDA d = new BillDA();
		return d.getnewbillId();
	}
	

	@GetMapping(value = "/billInfoBybillid/{billid}")
	public Bill getBillByBillId(@PathVariable("billid") int billid) {
//		List<Bill> pList = new ArrayList<>();

		BillDA d = new BillDA();
		return d.billInfoBybillid(billid);
//		return pList;
	}
	
	@GetMapping(value = "/billdInfoBybillid/{billid}")
	public List<BillDetails> getBillDByBillId(@PathVariable("billid") int billid) {
		List<BillDetails> pList = new ArrayList<>();

		BillDA d = new BillDA();
		pList = d.billdInfoBybillid(billid);
		return pList;
	}
	
}
