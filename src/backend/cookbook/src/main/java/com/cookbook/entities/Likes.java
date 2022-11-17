package com.cookbook.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Likes {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long likeId;
	private Long likedOnRecepie;
	private String  emailOfLikedUser;
	public void setEmailOfLikedUser(String emailOfLikedUser2) {
		// TODO Auto-generated method stub
		
	}
	public Long getLikeId() {
		return likeId;
	}
	public void setLikeId(Long likeId) {
		this.likeId = likeId;
	}
	public Long getLikedOnRecepie() {
		return likedOnRecepie;
	}
	public void setLikedOnRecepie(Long likedOnRecepie) {
		this.likedOnRecepie = likedOnRecepie;
	}
	public String getEmailOfLikedUser() {
		return emailOfLikedUser;
	}

}
