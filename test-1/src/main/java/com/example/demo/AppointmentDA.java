package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class AppointmentDA {

	public List<Appointment> allAppointment() {
		List<Appointment> sList = new ArrayList<>();
		Appointment s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("select * from appointment");
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {

				s = new Appointment(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),
						rs.getString(11), rs.getString(12), rs.getInt(13));
				sList.add(s);
			}

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return sList;

	}

	public Appointment appointmentById(int id) {
		Appointment s = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("select * from appointment where id=" + id);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {

				s = new Appointment(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),
						rs.getString(11), rs.getString(12), rs.getInt(13));

			}
			// return s;
		} catch (Exception e) {
			System.out.println(e);
		}
		return s;
	}

	public List<Appointment> appointmentByUserId(int userid) {
		List<Appointment> sList = new ArrayList<>();

		Appointment s = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("select * from appointment where user_id=" + userid);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {

				s = new Appointment(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),
						rs.getString(11), rs.getString(12), rs.getInt(13));
				sList.add(s);
			}

		} catch (Exception e) {
			System.out.println(e + "hiu");
		}
		// TODO: handle exception

		return sList;
	}

	public void updated(Appointment s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement(
					"update appointment set serial=?, name=?, age=?, gender=?, address=?, specialist=?, blood=?, phone=?, date=?, fee=?, consultant=?, user_id=? where id=?");
			pstmt.setInt(13, s.id);
			pstmt.setString(2, s.name);
			pstmt.setString(1, s.serial);
			pstmt.setString(3, s.age);
			pstmt.setString(6, s.specialist);
			pstmt.setString(4, s.gender);
			pstmt.setString(5, s.address);
			pstmt.setString(7, s.blood);
			pstmt.setString(8, s.phone);
			pstmt.setString(9, s.date);
			pstmt.setString(10, s.fee);
			pstmt.setString(11, s.consultant);
			pstmt.setInt(12, s.userid);

			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			e.printStackTrace();
		}

	}

	public void deletep(Appointment s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("delete from appointment where id=?");
			pstmt.setInt(1, s.id);

			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			// e.printStackTrace();
		}

	}

	public HashMap<String, String> patientLastVisit(int user_id, int doc_id) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement(
					"SELECT date FROM appointment WHERE user_id = ? AND doc_id = ? ORDER BY date DESC LIMIT 1");
			pstmt.setInt(1, user_id);
			pstmt.setInt(2, doc_id);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				HashMap<String, String> t = new HashMap<>();
				t.put("date", rs.getString(1));
				return t;
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

}
