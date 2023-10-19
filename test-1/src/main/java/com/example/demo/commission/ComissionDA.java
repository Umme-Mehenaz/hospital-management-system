package com.example.demo.commission;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.DocReport;
public class ComissionDA {
	
	Connection con;
	PreparedStatement pstmt;
	
	
	public List<Comission> doctorComision() {
		List<Comission> d = new ArrayList<>();
		Comission s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select  sum(commission) from commission group by commission");
			
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Comission(
						rs.getString(1));
				d.add(s);
				
			}

		} catch (Exception e) {
			System.out.println(e);
		}
		return d;
	}	
		
}
