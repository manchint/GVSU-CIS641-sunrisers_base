package com.cookbook.model;

import lombok.Data;

@Data
public class UserLoginRequest {
	private String email;
	private String password;

}
