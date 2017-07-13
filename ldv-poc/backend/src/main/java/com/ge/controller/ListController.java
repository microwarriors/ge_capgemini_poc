package com.ge.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ListController {

	private static final List<String> COURSES = Arrays.asList("Angularjs", "Angular", "Reactjs", "Emberjs", "Vuejs");

	// @CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/ldv", method = RequestMethod.GET, produces = "application/json")
	public String handleCoursesList() {
		System.out.println("it' works!!");
		return "{\"sd\":\"10/07/2016\", \"ed\":\"23/07/2016\",\"wd\":\"3 feet\",\"adt\":\"25/07/2016\",\"custName\":\"John\",\"sNo\":\"1291834129084129\",\"name\":\"Bravo\",\"version\":\"V012345\"}";
	}
}
