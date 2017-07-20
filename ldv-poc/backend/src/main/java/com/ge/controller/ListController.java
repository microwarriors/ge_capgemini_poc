package com.ge.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ListController {

	private static Logger LOGGER = Logger.getLogger(ListController.class.getName());

	// @CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/ldv", method = RequestMethod.GET, produces = "application/json")
	public String handleDataList() {
		LOGGER.info("it' works!!");
		return "{\"sd\":\"10/07/2016\", \"ed\":\"23/07/2016\",\"wd\":\"3 feet\",\"adt\":\"25/07/2016\",\"custName\":\"John\",\"sNo\":\"1291834129084129\",\"name\":\"Bravo\",\"version\":\"V012345\"}";
	}
	
	@RequestMapping(value = "/api/locoData", method = RequestMethod.POST)
	public void handleLocoData(@RequestParam("uploadFile") MultipartFile file,@RequestParam("fileType") String fileType, HttpServletRequest request, HttpServletResponse response){
	
		
		try {
			LOGGER.info("size..." +Long.toString(file.getSize()) + "file Name::" + file.getOriginalFilename());
			byte[] bytes = file.getBytes();
			LOGGER.info("Path------" + Files.write(Paths.get("D://ge//docs//sashi//" + file.getOriginalFilename()), bytes));
			
		} catch (IOException e) {
			LOGGER.info("File upload failed!!");
		}
		
			
		
	}
}
