package com.cookbook.service;

import java.net.UnknownHostException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cookbook.dao.UserDAO;
import com.cookbook.model.User;
import com.cookbook.model.UserLoginRequest;
import com.cookbook.model.UserModel;
import com.cookbook.model.UserRegisterRequest;

@Service 
public class UserService {
	@Autowired
	UserDAO userDAO;
	public String registerAnUser(UserRegisterRequest request) throws UnknownHostException {
		return userDAO.registerAnUser(request);
		
	}
	public User signInAnUser(UserLoginRequest request) {
		return userDAO.signInAnUser(request);
	}
}
