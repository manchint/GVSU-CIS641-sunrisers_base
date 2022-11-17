package com.cookbook.model;

import lombok.Data;

@Data
public class Likes {

	private Long likedOnRecepie;
	private String  emailOfLikedUser;
	public Long getLikedOnRecepie() {
		return likedOnRecepie;
	}
	public void setLikedOnRecepie(Long likedOnRecepie) {
		this.likedOnRecepie = likedOnRecepie;
	}
	public String getEmailOfLikedUser() {
		return emailOfLikedUser;
	}
	public void setEmailOfLikedUser(String emailOfLikedUser) {
		this.emailOfLikedUser = emailOfLikedUser;
	}

}
