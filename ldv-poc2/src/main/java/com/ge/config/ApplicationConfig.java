package com.ge.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
@PropertySource("classpath:/application.properties")
public class ApplicationConfig {
	
	@Autowired
    Environment env;
	
	 @Bean
	    public DataSource dataSource() {
	        DriverManagerDataSource dataSource = new DriverManagerDataSource();
	        dataSource.setDriverClassName(env.getProperty("postgres.dataSource.driver"));
	        dataSource.setUrl(env.getProperty("postgres.dataSource.url"));
	        dataSource.setUsername(env.getProperty("postgres.dataSource.username"));
	        dataSource.setPassword(env.getProperty("postgres.dataSource.password"));
	        return dataSource;
	    }

}
