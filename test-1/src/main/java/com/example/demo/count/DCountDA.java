package com.example.demo.count;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.Doctor;

public class DCountDA {
	
	Connection con;
	PreparedStatement pstmt;

	public List<DCount> allDiagnosis() {
		List<DCount> sList = new ArrayList<>();
		DCount s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select * from diagonosis");
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {

				s = new DCount(rs.getInt(1), rs.getString(2), rs.getString(3));
				sList.add(s);
			}

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return sList;

	}

	public List<String> dName() {
		List<String> list = new ArrayList<>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select distinct tname from diagonosis ");
			
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString(1));
			}

		} catch (Exception e) {
			System.out.println(e);
		}
		return list;
	}

	public DCount testList(String tname) {
		DCount s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select * from diagonosis where tname=?");
			pstmt.setString(1,tname);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new DCount(rs.getInt(1), rs.getString(2), rs.getString(3));
			}

		} catch (Exception e) {
			System.out.println(e);
		}
		return s;
	}
	
}
