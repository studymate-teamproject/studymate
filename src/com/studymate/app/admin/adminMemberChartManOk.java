package com.studymate.app.admin;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import com.studymate.app.Execute;
import com.studymate.app.admin.dao.AdminDAO;

public class adminMemberChartManOk implements Execute {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		AdminDAO adminDAO = new AdminDAO();
		Gson gson = new Gson();

		JsonArray cafeDayMan = new JsonArray();
		

		List<Map<String, Integer>> chartList = adminDAO.memberChartM();

		System.out.println(chartList);

		adminDAO.memberChartM().stream().map(gson::toJson).map(JsonParser::parseString).forEach(cafeDayMan::add);

		resp.setContentType("application/json; charset=utf-8");
		PrintWriter out = resp.getWriter();
		out.print(cafeDayMan.toString());
		out.close();
	}

}
