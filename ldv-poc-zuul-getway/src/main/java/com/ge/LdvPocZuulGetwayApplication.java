package com.ge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.cloud.netflix.turbine.EnableTurbine;
import org.springframework.context.annotation.Bean;

import com.ge.filters.ErrorFilter;
import com.ge.filters.PostFilter;
import com.ge.filters.PreFilter;
import com.ge.filters.RouteFilter;

//@EnableZuulProxy
@SpringBootApplication
@EnableHystrix
@EnableTurbine
@EnableHystrixDashboard
public class LdvPocZuulGetwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(LdvPocZuulGetwayApplication.class, args);
	}
	
	@Bean
    public PreFilter preFilter() {
        return new PreFilter();
    }
    @Bean
    public PostFilter postFilter() {
        return new PostFilter();
    }
    @Bean
    public ErrorFilter errorFilter() {
        return new ErrorFilter();
    }
    @Bean
    public RouteFilter routeFilter() {
        return new RouteFilter();
    }
}
