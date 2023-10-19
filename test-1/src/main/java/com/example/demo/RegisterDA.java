package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class RegisterDA {
	public void reg(Register s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pstmt = con.prepareStatement("insert into registration values(?,?,?,?,?,?)");
			pstmt.setInt(1, s.id);
			pstmt.setString(2, s.name);
			pstmt.setString(3, s.email);
			pstmt.setString(4, s.age);
			pstmt.setString(5, s.gender);
			pstmt.setString(6, s.password);
			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			e.printStackTrace();
		}

	}
	public Register check(Register s1) {
		    Register u = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			PreparedStatement pst = con.prepareStatement("Select * from registration where name=? AND password=?");
			pst.setString(1, s1.name);
			pst.setString(2, s1.password);
			ResultSet rs = pst.executeQuery();
			if (rs.next()) {
				u = new Register();
				u.setName(rs.getString(1));
				u.setPassword(rs.getString(2));
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return u;
	}
	public Register registerById(String name, String pass) {
		Register s=null;
		try {
			
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
				PreparedStatement pstmt = con.prepareStatement("select id, name, email, age, gender from registration where name=? and password=?");
				pstmt.setString(1, name);
				pstmt.setString(2, pass);
				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {

					s = new Register(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5));
					
				}
				return s;
		} catch (Exception e) {
			System.out.println(e+"hiu");	
		}
			// TODO: handle exception
		
		return s;
	}
	public Register ptientinfoById(int id) {
		Register s=null;
		try {
			
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
				PreparedStatement pstmt = con.prepareStatement("select * from registration where id=?");
				pstmt.setInt(1, id);
				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {

					s = new Register();
					s.setName(rs.getString(2));
					s.setEmail(rs.getString(3));
					s.setAge(rs.getString(4));
					s.setGender(rs.getString(5));
					
				}
				//return s;
		} catch (Exception e) {
			System.out.println(e);	
		}
		return s;
	}
}
