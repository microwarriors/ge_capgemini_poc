package com.ge.controller;

import java.sql.SQLException;
import java.util.logging.Logger;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ListController {

	private static Logger LOGGER = Logger.getLogger(ListController.class.getName());

	@Autowired
	DataSource dataSource;
	
	/*@Autowired
	protected RestTemplate restTemplate;*/
	
	// @CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/api/ldv", method = RequestMethod.GET, produces = "application/json")
	public String handleDataList() throws SQLException {
		LOGGER.info("it' works!!");
		LOGGER.info("DB Connection Status------->" + dataSource.getConnection().prepareStatement("").getSchema());
		return "{\"sd\":\"10/07/2016\", \"ed\":\"23/07/2016\",\"wd\":\"3 feet\",\"adt\":\"25/07/2016\",\"custName\":\"John\",\"sNo\":\"1291834129084129\",\"name\":\"Bravo\",\"version\":\"V012345\"}";
	}
	
	/*@RequestMapping(value = "/api/getFRA", method = RequestMethod.GET)
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
		
	}

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
	}*/
}
