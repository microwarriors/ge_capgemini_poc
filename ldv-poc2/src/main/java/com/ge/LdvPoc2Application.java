package com.ge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = {
		  "com.ge.config"
		  })
public class LdvPoc2Application {

	public static void main(String[] args) {
		SpringApplication.run(LdvPoc2Application.class, args);
	}

}
