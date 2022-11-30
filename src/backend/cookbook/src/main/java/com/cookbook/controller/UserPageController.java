package com.cookbook.controller;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cookbook.model.CommentModel;
import com.cookbook.model.LikeModel;
import com.cookbook.model.RecepieModel;
import com.cookbook.model.RecepieRequest;
import com.cookbook.model.User;
import com.cookbook.model.UserLoginRequest;
import com.cookbook.model.UserModel;
import com.cookbook.model.UserRegisterRequest;
import com.cookbook.service.HomePageService;
import com.cookbook.service.UserService;

@RestController
@RequestMapping(path = "/api/user")
@CrossOrigin
public class UserPageController {
	@Autowired
	UserService userService;

	@PostMapping(path = "/register", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String registerAnUser(UserRegisterRequest request) throws UnknownHostException {
		return userService.registerAnUser(request);

	}
	@PostMapping(path = "/signin")
	public User signingInAnUser(@RequestBody  UserLoginRequest request) throws UnknownHostException {
		return userService.signInAnUser(request);

	}
}
