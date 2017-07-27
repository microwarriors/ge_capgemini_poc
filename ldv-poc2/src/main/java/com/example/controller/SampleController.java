package com.example.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello From Spring Boot";
    }
    
    @RequestMapping(value = "/api/ldv", method = RequestMethod.GET, produces = "application/json")
	public String handleDataList() {
		return "{\"sd\":\"10/07/2016\", \"ed\":\"23/07/2016\",\"wd\":\"3 feet\",\"adt\":\"25/07/2016\",\"custName\":\"John\",\"sNo\":\"1291834129084129\",\"name\":\"Bravo\",\"version\":\"V012345\"}";
	}

}
