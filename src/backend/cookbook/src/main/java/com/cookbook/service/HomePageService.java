package com.cookbook.service;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.cookbook.dao.HomePageDAO;
import com.cookbook.dao.UserDAO;
import com.cookbook.entities.Recepie;
import com.cookbook.entities.User;
import com.cookbook.model.CommentModel;
import com.cookbook.model.LikeModel;
import com.cookbook.model.RecepieModel;
import com.cookbook.model.RecepieRequest;
import com.cookbook.utils.ImageUtils;
import com.cookbook.utils.RecepieUtils;

@Service
public class HomePageService {
	@Autowired
	HomePageDAO homePageDAO;
	@Value("${filePath}")
	private String filePath;
	@Autowired
	UserDAO userDAO;
	@Value("${server.port}")
	private String port;

	public List<RecepieModel> getAllRecepies(String userEmail) {
		return homePageDAO.getAllRecepies(userEmail);

	}

	public RecepieModel publishARecepie(RecepieRequest request) throws UnknownHostException {

		String nameOftheImageInFileSystem = ImageUtils.saveAnImage(request, filePath);
		String uri = ImageUtils.buildAnURI(nameOftheImageInFileSystem, port);
		com.cookbook.entities.Recepie recepieEntity = RecepieUtils.buildRecepieEntity(uri, request);
		User user = userDAO.getUser(request.getPublishedBy());
		return RecepieUtils.buildRecepieModel(homePageDAO.publishRecepie(recepieEntity), false);

	}

	public byte[] fetchImage(@PathVariable("imageName") String imageName) throws IOException {
		System.out.println("entered....!!!!");
		System.out.println("value is " + filePath + imageName);
		byte[] data = ImageUtils.ImageFetch(imageName, filePath);
		return data;
	}

	public List<CommentModel> commentOnaRecepie(CommentModel commentModel) {
		// com.cookbook.entities.Comment commentEntity=
		// RecepieUtils.buildCommentEntity(comment);
		System.out.println("entered service");

		List<CommentModel> commentList = homePageDAO.commentOnARecepie(commentModel);
		System.out.println("exited service");

		return commentList;
	}

	public RecepieModel likeARecepie(LikeModel like) {
		RecepieModel recepieModel = homePageDAO.likeARecepie(like);
		User user = userDAO.getUser(like.getEmailOfLikedUser());
		System.out.println("user is " + user + "====recepie is " + recepieModel);
		return recepieModel;

	}

	public List<RecepieModel> searchARecepie(String keyword) {
		return homePageDAO.searchARecepie(keyword);
	}public List<RecepieModel> searchARecepieById(Long keyword) {
		return homePageDAO.searchARecepieById(keyword);
	}
}
