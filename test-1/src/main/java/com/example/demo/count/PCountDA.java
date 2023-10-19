package com.example.demo.count;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.example.demo.Doctor;

public class PCountDA {
	Connection con;
	PreparedStatement pstmt;
	
	
	
	public void admit(PCount s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("insert into admit values(?,?,?,?,?,?,?,?,?,?,?,?)");
			pstmt.setInt(1, s.id);
			pstmt.setString(2, s.name);
			pstmt.setString(3, s.fname);
			pstmt.setString(4, s.phone);
			pstmt.setString(5, s.age);
			pstmt.setString(6, s.gender);
			pstmt.setString(7, s.blood);
			pstmt.setString(8, s.address);
			pstmt.setString(9, s.addoc);
			pstmt.setString(10, s.unit);
			pstmt.setString(11, s.admitdate);
			pstmt.setString(12, s.seat);

			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			e.printStackTrace();
		}

}
	
	
	public PCount admitInvoice() {
		PCount s = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select * from admit");
			
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {

				s = new PCount(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),
						rs.getString(1),rs.getString(12));

			}
			return s;
		} catch (Exception e) {
			System.out.println(e);
		}
		// TODO: handle exception

		return s;
	}
}
