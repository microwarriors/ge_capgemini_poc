package com.ge;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class RequestProcessingInterceptor extends HandlerInterceptorAdapter {

	@Autowired
	private HttpSession session;
	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2) throws Exception {
		// TODO Auto-generated method stub
		System.out.println(request.getParameter("username"));
		System.out.println("inside preHandle");
		System.out.println(request.getSession().getAttribute("lgC"));
		/*JSONObject obj=new JSONObject();
		//String username=obj.getString("username");
		obj.put("username", "jatin");
		System.out.println(obj.getString("username"));*/
		 
		String requestURI = request.getRequestURI();
		System.out.println(requestURI);
		if(requestURI.contains("/login")){
			HttpSession httpSession=request.getSession(false);
			
			//System.out.println("arg"+requestURI + "inside Interceptor" + httpSession.getAttribute("lgC"));
			if(httpSession!=null)
			{
				System.out.println(request.getSession().getAttribute("lgC"));
			//request.getSession().setAttribute("lgC", null);
			return true;
			}
			else
			{
				return true;
			}
			
			
		}
		else
		{
			
			return true;
		}
		
		
		
	}
	

}
