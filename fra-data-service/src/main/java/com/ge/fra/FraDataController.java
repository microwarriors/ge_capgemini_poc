package com.ge.fra;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ge.fra.vo.FraData;
import com.ge.fra.vo.FraDataList;

@RestController
public class FraDataController {
	
	private static Logger logger = Logger.getLogger(FraDataController.class.getName());
	
	@RequestMapping(value = "/getFra", method = RequestMethod.GET, produces = "application/json")
	public FraDataList getFraData(){
		FraDataList fraDataList = new FraDataList();
		FraData data1 = new FraData();
		data1.setDistance("0ml. 0ft.");
		data1.setEabBcPressure("25");
		data1.setEabBPPressure("255");
		data1.setEotBpPressure("0");
		data1.setSpeed("0");
		data1.setTimeStamp("2/6/2017 10:14:00PM");
		data1.setTractiveEffortTot("32");
		
		List<FraData> dataList = new ArrayList<FraData>();
		dataList.add(data1);
		
		fraDataList.setStartTime("2/6/2017 10:14:00PM");
		fraDataList.setEndTime("3/6/2017 10:14:00PM");
		fraDataList.setFraData(dataList);
		logger.info("Data Details...............>" + fraDataList.getFraData().toArray().toString());
		return fraDataList;
	}

}
