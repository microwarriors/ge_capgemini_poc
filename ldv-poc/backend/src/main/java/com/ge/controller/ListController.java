package com.ge.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ge.vo.FraDataList;
import com.ge.vo.Login;



@RestController
public class ListController {

	private static Logger LOGGER = Logger.getLogger(ListController.class.getName());

	@Autowired
	protected RestTemplate restTemplate;
	
	// @CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/ldv", method = RequestMethod.GET, produces = "application/json")
	public String handleDataList()  {
	
		LOGGER.info("it' works!!");
		return "{\"sd\":\"10/07/2016\", \"ed\":\"23/07/2016\",\"wd\":\"3 feet\",\"adt\":\"25/07/2016\",\"custName\":\"John\",\"sNo\":\"1291834129084129\",\"name\":\"Bravo\",\"version\":\"V012345\"}";
	}
/*	
	@RequestMapping(value = "/api/getFRA", method = RequestMethod.GET)
	public void getFraData(){
		FraDataList fraDataList = restTemplate.getForObject("http://FRA-DATA-SERVICE/getFra",
				FraDataList.class);
		LOGGER.info("*********Data rcvd*************");
		LOGGER.info("StartTime : " + fraDataList.getStartTime());
		LOGGER.info("EndTime : " + fraDataList.getEndTime());
		LOGGER.info("Distance : " + fraDataList.getFraData().get(0).getDistance());
		LOGGER.info("EabBcPressure : " + fraDataList.getFraData().get(0).getEabBcPressure());
		LOGGER.info("EabBPPressure : " + fraDataList.getFraData().get(0).getEabBPPressure());
		LOGGER.info("Speed : " + fraDataList.getFraData().get(0).getSpeed());
		LOGGER.info("TimeStamp : " + fraDataList.getFraData().get(0).getTimeStamp());
		
	}*/

	@RequestMapping(value = "/api/locoData", method = RequestMethod.POST)
	public void handleLocoData(@RequestParam("uploadFile") MultipartFile file,
			@RequestParam("fileType") String fileType, HttpServletRequest request, HttpServletResponse response) {
		try {
			LOGGER.info("size..." + Long.toString(file.getSize()) + "file Name::" + file.getOriginalFilename());
			byte[] bytes = file.getBytes();
			LOGGER.info(
					"Path------" + Files.write(Paths.get("D://ge//docs//sashi//" + file.getOriginalFilename()), bytes));
		} catch (IOException e) {
			LOGGER.info("File upload failed!!");
		}
	}
	
	@RequestMapping(value = "/api/login", method = RequestMethod.POST)
	public boolean login( @RequestBody String loginData, HttpServletRequest request, HttpServletResponse response) 
	{
		
			/*
			System.out.println("user is"+loginData);
			System.out.println(request.getSession().getAttribute("lgC"));
		
		if(request.getSession().getAttribute("lgc")==null)
		{
			request.getSession().setAttribute("lgC",loginData);
		}
		else
		{
			System.out.println(request.getSession().getAttribute("lgC"));
		}*/
		request.getSession().setAttribute("lgC",loginData);
		return true;
			//System.out.println("session"+request.getSession().getAttribute("lgC"));
	}
	
	@RequestMapping(value = "/api/logout", method = RequestMethod.GET)
	public void logout(  HttpServletRequest request, HttpServletResponse response) 
	{
		
		HttpSession session = request.getSession(false);
		if(session!=null)
		{
		session.invalidate();
		}
	}
	
}
