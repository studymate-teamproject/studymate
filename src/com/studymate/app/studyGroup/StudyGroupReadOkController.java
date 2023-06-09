package com.studymate.app.studyGroup;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.studymate.app.Execute;
import com.studymate.app.studyGroup.dao.StudyGroupDAO;
import com.studymate.app.studyGroup.vo.StudyGroupVO;

public class StudyGroupReadOkController implements Execute {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		int studyGroupNumber = Integer.valueOf(req.getParameter("studyGroupNumber"));
		StudyGroupDAO studyGroupDAO = new StudyGroupDAO();
		StudyGroupVO studyGroupVO = studyGroupDAO.select(studyGroupNumber);
	
		studyGroupDAO.updateReadCount(studyGroupNumber);
		System.out.println(studyGroupVO);
		req.setAttribute("group", studyGroupVO); 
		// 통째로 넘겨놓은 뒤 getter로 뽑으면 됨. 
		
		System.out.println("read ok controller 타는지");
		req.getRequestDispatcher("/app/group/studyGroupRead.jsp").forward(req, resp);
		
	}

}
