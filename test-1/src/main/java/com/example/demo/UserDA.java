package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDA {
	Connection con;
	PreparedStatement pst;

	public User check(User s1) {
		User u = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pst = con.prepareStatement("Select * from user where username=? AND pass=?");
			pst.setString(1, s1.username);
			pst.setString(2, s1.pass);
			ResultSet rs = pst.executeQuery();
			if (rs.next()) {
				u = new User();
				u.setUsername(rs.getString(1));
				u.setPass(rs.getString(2));
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return u;
	}
}
