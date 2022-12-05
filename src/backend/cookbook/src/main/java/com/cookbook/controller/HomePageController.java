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
import org.springframework.web.bind.annotation.RestController;

import com.cookbook.model.CommentModel;
import com.cookbook.model.LikeModel;
import com.cookbook.model.RecepieModel;
import com.cookbook.model.RecepieRequest;
import com.cookbook.model.SearchRequest;
import com.cookbook.service.HomePageService;

@RestController
@RequestMapping(path = "/api/recepies")
@CrossOrigin
public class HomePageController {

	@Autowired
	HomePageService homePageService;
	

	@GetMapping(path = { "/home/recepies/" })
	public List<RecepieModel> getAllRecepies() {
		return homePageService.getAllRecepies(null);
	}
	@PostMapping(path = "/home/search/" )
	public List<RecepieModel> searchARecepie(@RequestBody  SearchRequest searchRequest) {
		System.out.println("key word of the recepie is "+searchRequest.getKeyword());
		return homePageService.searchARecepie(searchRequest.getKeyword());
	}
	@PostMapping(path = "/home/search/{recepieId}" )
	public List<RecepieModel> searchARecepieById(@PathVariable  Long recepieId) {
		System.out.println("id  of the recepie is "+recepieId);
		return homePageService.searchARecepieById(recepieId);
	}


	@PostMapping(path = { "/" }, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public RecepieModel publishARecipie(@ModelAttribute RecepieRequest recepieRequest) {
		// System.out.println("image is"+recepieRequest.getImageOfTheRecepie());
		try {
			return homePageService.publishARecepie(recepieRequest);
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return new RecepieModel();
	}

	@GetMapping(path = "/images/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
	public byte[] fetchImage(@PathVariable("imageName") String imageName) throws IOException {
		System.out.println("for image");
		return homePageService.fetchImage(imageName);
	}
	@PostMapping(path = "/comment")
	public List<CommentModel> commentOnRecepie(@RequestBody CommentModel commentModel){
		System.out.println("entered controller");
		System.out.println(commentModel);
		List<CommentModel> commentList=homePageService.commentOnaRecepie(commentModel);
		System.out.println("left controller");

		return commentList;
		
	}
	@PostMapping(path="/likeARecepie")
	public RecepieModel likeArecepie(@RequestBody LikeModel like) {
		System.out.println(like);
		RecepieModel model=homePageService.likeARecepie(like);
		return model;
		
	}

}
