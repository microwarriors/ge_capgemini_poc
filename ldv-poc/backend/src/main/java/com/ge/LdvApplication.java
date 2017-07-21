package com.ge;

import java.util.logging.Logger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.client.RestTemplate;

import com.ge.vo.FraDataList;

@SpringBootApplication
@EnableDiscoveryClient
public class LdvApplication {

	//private static Logger logger = Logger.getLogger(LdvApplication.class.getName());

	public static void main(String[] args) {
		SpringApplication.run(LdvApplication.class, args);
		/*FraDataList fraDataList = new RestTemplate().getForObject("http://din80015186.corp.capgemini.com:2222/getFra",
				FraDataList.class);
		logger.info("*********Data rcvd*************");
		logger.info("StartTime : " + fraDataList.getStartTime());
		logger.info("EndTime : " + fraDataList.getEndTime());
		logger.info("Distance : " + fraDataList.getFraData().get(0).getDistance());
		logger.info("EabBcPressure : " + fraDataList.getFraData().get(0).getEabBcPressure());
		logger.info("EabBPPressure : " + fraDataList.getFraData().get(0).getEabBPPressure());
		logger.info("Speed : " + fraDataList.getFraData().get(0).getSpeed());
		logger.info("TimeStamp : " + fraDataList.getFraData().get(0).getTimeStamp());*/
	}
}
