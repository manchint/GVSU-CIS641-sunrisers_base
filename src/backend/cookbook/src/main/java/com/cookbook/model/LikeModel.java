package com.cookbook.model;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class LikeModel {

	private Long likedOnRecepie;
	private String  emailOfLikedUser;

}
