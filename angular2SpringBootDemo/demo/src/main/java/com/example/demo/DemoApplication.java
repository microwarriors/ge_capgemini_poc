package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) throws SQLException {
		System.out.println("Hi Sashi comming sooonn....");
		try {
			Class.forName("org.postgresql.Driver");
			Connection connection = null;
			connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/ge_poc","postgres", "sri@123");
			System.out.println("Connection Success...  " +  connection.getSchema()  + "   "+ connection.getMetaData().getUserName() + "   " + connection.getMetaData().getDatabaseProductName() );
			//connection.getMetaData().getUserName();
			connection.close();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		SpringApplication.run(DemoApplication.class, args);
	}
}
