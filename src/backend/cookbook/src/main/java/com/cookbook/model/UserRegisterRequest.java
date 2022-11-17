package com.cookbook.model;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UserRegisterRequest {
	private String firstName;
	private String lastName;
	private String userName;
	private String email;
	private String password;
	private MultipartFile profPicture;
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public MultipartFile getProfPicture() {
		return profPicture;
	}
	public void setProfPicture(MultipartFile profPicture) {
		this.profPicture = profPicture;
	}
	

}
