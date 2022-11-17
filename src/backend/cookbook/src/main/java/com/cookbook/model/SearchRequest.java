package com.cookbook.model;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class SearchRequest {
private String keyword;
private String emailOftheLoggedUser;
public String getKeyword() {
	// TODO Auto-generated method stub
	return keyword;
}
public String getEmailOftheLoggedUser() {
	return emailOftheLoggedUser;
}
public void setEmailOftheLoggedUser(String emailOftheLoggedUser) {
	this.emailOftheLoggedUser = emailOftheLoggedUser;
}
public void setKeyword(String keyword) {
	this.keyword = keyword;
}
}
