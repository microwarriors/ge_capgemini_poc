package com.ge.vo;

import java.util.List;

public class FraDataList {
	
	private static final long serialVersionUID = 1L;
	
	private String startTime;
	
	private String endTime;
	
	List<FraData> fraData = null;

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public List<FraData> getFraData() {
		return fraData;
	}

	public void setFraData(List<FraData> fraData) {
		this.fraData = fraData;
	}

}
