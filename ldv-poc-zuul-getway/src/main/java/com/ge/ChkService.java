package com.ge;

import java.net.URI;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@Service
public class ChkService {

	private final RestTemplate restTemplate;

	  public ChkService(RestTemplate rest) {
	    this.restTemplate = rest;
	  }

	  @HystrixCommand(fallbackMethod = "fraUnavailable")
	  public String readingFraList() {
	    URI uri = URI.create("http://localhost:2222/getFra");
	    return this.restTemplate.getForObject(uri, String.class);
	  }

	  public String fraUnavailable() {
	    return "Curretnly FRA Service Is Not Available To Serve Data!!";
	  }
}
