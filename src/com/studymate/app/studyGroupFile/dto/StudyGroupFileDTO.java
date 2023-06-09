package com.studymate.app.studyGroupFile.dto;
//group_file_system_name varchar(300) primary key,
//group_file_original_name varchar(300),
//study_group_number int unsigned,
public class StudyGroupFileDTO {
	private String groupFileSystemName;
	private String groupFileOriginalName;
	private int studyGroupNumber;
	
	public StudyGroupFileDTO() {}

	public String getGroupFileSystemName() {
		return groupFileSystemName;
	}

	public void setGroupFileSystemName(String groupFileSystemName) {
		this.groupFileSystemName = groupFileSystemName;
	}

	public String getGroupFileOriginalName() {
		return groupFileOriginalName;
	}

	public void setGroupFileOriginalName(String groupFileOriginalName) {
		this.groupFileOriginalName = groupFileOriginalName;
	}

	public int getStudyGroupNumber() {
		return studyGroupNumber;
	}

	public void setStudyGroupNumber(int studyGroupNumber) {
		this.studyGroupNumber = studyGroupNumber;
	}

	@Override
	public String toString() {
		return "StudyGroupFileDTO [groupFileSystemName=" + groupFileSystemName + ", groupFileOriginalName="
				+ groupFileOriginalName + ", studyGroupNumber=" + studyGroupNumber + "]";
	}
	
	
}
