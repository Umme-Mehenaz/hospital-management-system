package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class DoctorDA {
	Connection con;
	PreparedStatement pstmt;

	public List<Doctor> allStudent() {
		List<Doctor> sList = new ArrayList<>();
		Doctor s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select * from doctor");
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {

				s = new Doctor(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),
						rs.getString(11));
				sList.add(s);
			}

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return sList;

	}

	public Doctor studentById(int doc_id) {
		Doctor s = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select * from doctor where doc_id="+doc_id);
			
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {

				s = new Doctor(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),
						rs.getString(11));

			}
			return s;
		} catch (Exception e) {
			System.out.println(e);
		}
		// TODO: handle exception

		return s;
	}

	public void insert(Doctor s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("insert into doctor values(?,?,?,?,?,?,?,?,?,?,?)");
			pstmt.setInt(1, s.doc_id);
			pstmt.setString(2, s.name);
			pstmt.setString(3, s.email);
			pstmt.setString(4, s.specialist);
			pstmt.setString(5, s.experiance);
			pstmt.setString(6, s.followup);
			pstmt.setString(7, s.fee);
			pstmt.setString(8, s.img);
			pstmt.setString(9, s.totalpatient);
			pstmt.setString(10, s.commission);
			pstmt.setString(11, s.total);

			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			e.printStackTrace();
		}

	}

	public void save(Doctor s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("insert into appointment values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			pstmt.setInt(1, s.id);
			pstmt.setInt(13, s.userid);
			pstmt.setString(3, s.name);
			pstmt.setString(2, s.serial);
			pstmt.setString(5, s.gender);
			pstmt.setString(4, s.age);
			pstmt.setString(6, s.address);
			pstmt.setString(7, s.specialist);
			pstmt.setString(8, s.blood);
			pstmt.setString(9, s.phone);
			pstmt.setString(10, s.date);
			pstmt.setString(11, s.fee);
			pstmt.setString(12, s.consultant);
			pstmt.setInt(14, s.doc_id);
			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			e.printStackTrace();
		}

	}

	public void update(Doctor s) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement(
					"update doctor set name=?,email=?,specialist=?,experiance=?,followup=?,fee=?,img=? where doc_id=?");
			
			pstmt.setString(1, s.name);
			pstmt.setString(2, s.email);
			pstmt.setString(3, s.specialist);
			pstmt.setString(4, s.experiance);
			pstmt.setString(5, s.followup);
			pstmt.setString(6, s.fee);
			pstmt.setString(7, s.img);
			pstmt.setInt(8, s.doc_id);

			pstmt.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			e.printStackTrace();
		}

	}

	public void delete(int doc_id) {
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("delete from doctor where doc_id="+doc_id);
			pstmt.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
			// TODO: handle exception
			e.printStackTrace();
		}

	}
	/*
	 * public void search(Student s) {
	 * 
	 * try { Class.forName("com.mysql.cj.jdbc.Driver"); con =
	 * DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root",
	 * "nh123456"); pstmt =
	 * con.prepareStatement("select * from appointment where id=?"); pstmt.setInt(1,
	 * s.id);
	 * 
	 * pstmt.executeUpdate();
	 * 
	 * } catch (Exception e) { System.out.println(e); // TODO: handle exception
	 * e.printStackTrace(); }
	 * 
	 * }
	 */

	public List<String> specialistName() {
		List<String> list = new ArrayList<>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select distinct specialist from doctor");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString(1));
			}

		} catch (Exception e) {
			System.out.println(e);
		}
		return list;
	}
	
	public List<String> doctorName(String spe) {
		List<String> list = new ArrayList<>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select name from doctor where specialist=?");
			pstmt.setString(1, spe);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString(1));
			}

		} catch (Exception e) {
			System.out.println(e);
		}
		return list;
	}

	public Doctor docIdByName(String name) {
		Doctor s = null;
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select doc_id,fee from doctor where name=?");
			
			pstmt.setString(1, name);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Doctor();
				s.setDoc_id(rs.getInt(1));
				s.setFee(rs.getString(2));

			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		// TODO: handle exception

		return s;
	}
	

	public List<Doctor> doctorloginByid(int doc_id) {
		List<Doctor> sList = new ArrayList<>();
	
		Doctor s=null;
		try {
			
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
				PreparedStatement pstmt = con.prepareStatement("select * from doctor where doc_id=?  AND email=?");

				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {

					s = new Doctor();
					s.setDoc_id(rs.getInt(1));
					s.setEmail(rs.getString(2));
                     sList.add(s);
				}
				
		} catch (Exception e) {
			System.out.println(e+"hiu");	
		}
		// TODO: handle exception
	
		return sList;
}
	
	public List<Doctor> docApp(int doc_id) {
		System.out.println(doc_id);
		List<Doctor> sList = new ArrayList<>();
	
		Doctor s=null;
		try {
			
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
				PreparedStatement pstmt = con.prepareStatement("select * from appointment where doc_id =?");
				pstmt.setInt(1, doc_id);
				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {

					s = new Doctor(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
							rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10),
							rs.getString(11),rs.getString(12),rs.getInt(13),rs.getInt(14));
					sList.add(s);
				}
				
		} catch (Exception e) {
			System.out.println(e);	
		}
		// TODO: handle exception
	
		return sList;
}
	public List<String> referDoctor(String name) {
		List<String> list = new ArrayList<>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select name from doctor");
			
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString(1));
			}

		} catch (Exception e) {
			System.out.println(e);
		}
		return list;
	}	
		
		
	public List<DocReport> doctorReport() {
		List<DocReport> d = new ArrayList<>();
		DocReport s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/my_db", "root", "nh123456");
			pstmt = con.prepareStatement("select doc_id, consultant, specialist, sum(fee), count(user_id), commission from appointment left join commission using(doc_id) group by doc_id, consultant, specialist");
			
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new DocReport(rs.getInt(1),  rs.getString(2), rs.getString(3),
						rs.getString(4),rs.getInt(5),  rs.getString(6));
				d.add(s);
				
			}

		} catch (Exception e) {
			System.out.println(e);
		}
		return d;
	}	
		
}
