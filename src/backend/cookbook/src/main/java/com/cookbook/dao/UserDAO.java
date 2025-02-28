package com.cookbook.dao;

import java.net.UnknownHostException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import com.cookbook.entities.User;
import com.cookbook.model.UserLoginRequest;
import com.cookbook.model.UserModel;
import com.cookbook.model.UserRegisterRequest;
import com.cookbook.repositories.LikesRepository;
import com.cookbook.repositories.UserRepository;
import com.cookbook.utils.ImageUtils;
import com.cookbook.utils.UserUtil;

@Repository
public class UserDAO {
	@Autowired
	private UserRepository userRepository;
	@Value("${filePath}")
	private String filePath;
	@Value("${server.port}")
	private String port;

	public User getUser(String email) {
		User user = userRepository.findByEmail(email);
		return user;
	}

	public String registerAnUser(UserRegisterRequest request) throws UnknownHostException {
		User existingUser = userRepository.findByEmail(request.getEmail());
		if (existingUser != null) {
			throw new RuntimeException("user already exists");
		}
		User user = new User();
		user.setEmail(request.getEmail());
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		String uri = null;
		if (filePath != null || filePath != "") {
			String fileName = ImageUtils.saveAnImage(request, filePath);
			uri = ImageUtils.buildAnURI(fileName, port);
		}
		user.setProfilePicturePath(uri);
		user.setPassword(request.getPassword());
		User registredUser = userRepository.save(user);
		return "registration successful";
	}

	public com.cookbook.model.User signInAnUser(UserLoginRequest request) {

		User user = userRepository.findByEmail(request.getEmail());
		if (user.getPassword().equals(request.getPassword())) {
			return UserUtil.buildAnUserModel(user);
		}

		return null;
	}

}
