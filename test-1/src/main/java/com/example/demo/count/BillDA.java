package com.example.demo.count;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.example.demo.Appointment;
import com.example.demo.Doctor;

public class BillDA {
	public void bill(Bill s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("insert into bill values(?,?,?,?,?,?,?,?)");
			pstmt.setInt(1, s.billid);
			pstmt.setString(2, s.name);
			pstmt.setInt(3, s.id);
			pstmt.setString(4, s.bdate);
			pstmt.setString(6, s.commision);
			pstmt.setString(5, s.totalbill);
			pstmt.setString(7, s.subtotal);
			pstmt.setString(8, s.consultant);

			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception

		}

	}

	public void billDetails(BillDetails s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("insert into bill_details values(?,?,?,?,?)");
			pstmt.setInt(1, s.id);
			pstmt.setInt(2, s.billid);
			pstmt.setInt(3, s.tid);
			pstmt.setString(4, s.tname);
			pstmt.setString(5, s.price);

			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			e.printStackTrace();
		}

	}

	public HashMap<String, String> getnewbillId() {
		HashMap<String, String> t = new HashMap<>();
		t.put("billid", "1");
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("select billid from bill order by billid desc limit 1");
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				int a = rs.getInt(1);
				t.put("billid", String.valueOf(a + 1));
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return t;
	}
	
	public Bill billInfoBybillid(int billid) {
//		List<Bill> sList = new ArrayList<>();

		Bill s = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("select * from bill where billid=" + billid);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {

				s = new Bill(rs.getInt(1), rs.getString(2), rs.getInt(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7), null, null,rs.getString(8));
//				sList.add(s);
			}

		} catch (Exception e) {
			System.out.println(e + "hiu");
		}
		// TODO: handle exception

		return s;
	}
	public List<BillDetails> billdInfoBybillid(int billid) {
		List<BillDetails> sList = new ArrayList<>();

		BillDetails s = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("select * from bill_details where billid=" + billid);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {

				s = new BillDetails(rs.getInt(1), rs.getInt(2), rs.getInt(3), rs.getString(4), rs.getString(5)
						);
				sList.add(s);
			}

		} catch (Exception e) {
			System.out.println(e + "hiu");
		}
		// TODO: handle exception

		return sList;
	}
	
}
