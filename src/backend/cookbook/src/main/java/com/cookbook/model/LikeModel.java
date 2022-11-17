package com.cookbook.model;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class LikeModel {

	public String getEmailOfLikedUser() {
		return emailOfLikedUser;
	}
	public void setEmailOfLikedUser(String emailOfLikedUser) {
		this.emailOfLikedUser = emailOfLikedUser;
	}
	public void setLikedOnRecepie(Long likedOnRecepie) {
		this.likedOnRecepie = likedOnRecepie;
	}
	private Long likedOnRecepie;
	private String  emailOfLikedUser;
	public Long getLikedOnRecepie() {
		// TODO Auto-generated method stub
		return likedOnRecepie;
	}

}
