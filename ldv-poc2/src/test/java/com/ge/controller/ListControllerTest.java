package com.ge.controller;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

// TODO: Auto-generated Javadoc
/**
 * The Class ListControllerTest.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ListControllerTest {

	/** The mvc. */
	@Autowired
	private MockMvc mvc;

	/**
	 * Test handle data list.
	 *
	 * @throws Exception the exception
	 */
	@Test
	public void testHandleDataList() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/api/ldv").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(content().string(equalTo("{\"sd\":\"10/07/2016\", \"ed\":\"23/07/2016\",\"wd\":\"3 feet\",\"adt\":\"25/07/2016\",\"custName\":\"John\",\"sNo\":\"1291834129084129\",\"name\":\"Bravo\",\"version\":\"V012345\"}")));;
	}

}
