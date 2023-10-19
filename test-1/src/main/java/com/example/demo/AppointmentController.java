package com.example.demo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AppointmentController {

	List<Appointment> pList = new ArrayList<>();

	@RequestMapping(value = "/al")
	public List<Appointment> allAppointment() {
		AppointmentDA d = new AppointmentDA();
		pList = d.allAppointment();
		return pList;
	}

	@GetMapping(value = "/appointment/{id}")
	public Appointment getAppointmentById(@PathVariable("id") int id) {
		Appointment s;

		AppointmentDA d = new AppointmentDA();
		s = d.appointmentById(id);
		return s;
	}

	@GetMapping(value = "/userappointment/{userid}")
	public List<Appointment> getAppointmentByUserId(@PathVariable("userid") int userid) {
		List<Appointment> pList = new ArrayList<>();

		AppointmentDA d = new AppointmentDA();
		pList = d.appointmentByUserId(userid);
		return pList;
	}

	@PostMapping(value = "/updated")
	public void updated(@RequestBody Appointment s) {
		AppointmentDA d = new AppointmentDA();
		d.updated(s);

	}

	@PostMapping(value = "/deletep")
	public void deletep(@RequestBody Appointment s) {
		AppointmentDA d = new AppointmentDA();
		d.deletep(s);

	}

	@GetMapping(value = "/paitentlastvisit/{userid}/{docid}")
	public HashMap<String, String> patientLastVisit(@PathVariable("userid") int userid, @PathVariable("docid") int docid) {
		AppointmentDA d = new AppointmentDA();
		return d.patientLastVisit(userid, docid);
	}

}
