package com.cookbook.utils;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.imageio.ImageIO;

import org.springframework.web.multipart.MultipartFile;

import com.cookbook.dao.HomePageDAO;
import com.cookbook.entities.User;
import com.cookbook.model.CommentModel;
import com.cookbook.model.RecepieModel;
import com.cookbook.model.RecepieRequest;

public class RecepieUtils {


	/*
	 * public static List<RecepieModel> buildRecepieModel(HomePageDAO
	 * homePageDAO,boolean like) { return
	 * StreamSupport.stream(homePageDAO.getAllRecepies().spliterator(),
	 * false).collect(Collectors.toList()) .stream().map(recepieEntity
	 * ->RecepieUtils.buildRecepieModel(recepieEntity, like)
	 * 
	 * 
	 * { RecepieModel recepieModel = new RecepieModel();
	 * recepieModel.setDateOfPublishing(recepieEntity.getDateOfPublishing());
	 * recepieModel.setDescription(recepieEntity.getDescription());
	 * recepieModel.setIngredients(recepieEntity.getIngredients());
	 * recepieModel.setName(recepieEntity.getName());
	 * recepieModel.setProcedureOfTheRecepie(recepieEntity.getProcedureOfTheRecepie(
	 * )); recepieModel.setPublishedBy(recepieEntity.getPublishedBy());
	 * recepieModel.setRecepieId(recepieEntity.getRecepieId());
	 * recepieModel.setRecepieURL(recepieEntity.getRecepieURL());
	 * recepieModel.setCommentModels(recepieEntity.getComments().stream()
	 * .map(comment ->
	 * RecepieUtils.buildCommentModel(comment)).collect(Collectors.toList()));
	 * 
	 * return recepieModel;
	 * 
	 * }).collect(Collectors.toList()); }
	 */

	public static com.cookbook.entities.Recepie buildRecepieEntity(String uri, RecepieRequest request) {
		com.cookbook.entities.Recepie recepie = new com.cookbook.entities.Recepie();
		recepie.setDateOfPublishing(new Date());
		recepie.setDescription(request.getDescription());
		recepie.setIngredients(request.getIngredients());
		recepie.setName(request.getName());
		recepie.setPublishedBy(request.getPublishedBy());
		recepie.setProcedureOfTheRecepie(request.getProcedureOfTheRecepie());
		recepie.setRecepieURL(uri);
		return recepie;

	}

	public static com.cookbook.model.RecepieModel buildRecepieModel(com.cookbook.entities.Recepie recepieEntity,
			boolean like) {
		com.cookbook.model.RecepieModel recepieModel = new com.cookbook.model.RecepieModel();
		recepieModel.setRecepieId(recepieEntity.getRecepieId());
		recepieModel.setDateOfPublishing(new Date());
		recepieModel.setDescription(recepieEntity.getDescription());
		recepieModel.setIngredients(recepieEntity.getIngredients());
		recepieModel.setName(recepieEntity.getName());
		recepieModel.setPublishedBy(recepieEntity.getPublishedBy());
		recepieModel.setProcedureOfTheRecepie(recepieEntity.getProcedureOfTheRecepie());
		recepieModel.setRecepieURL(recepieEntity.getRecepieURL());
		recepieModel.setUsersLiked(0);
		recepieModel.setCommentModels(recepieEntity.getComments() != null ? recepieEntity.getComments().stream()
				.map(x -> RecepieUtils.buildCommentModel(x)).collect(Collectors.toList()) : new ArrayList<>());
		recepieModel.setWheatherLikedByuser(like);
		return recepieModel;

	}

	public static com.cookbook.model.CommentModel buildCommentModel(com.cookbook.entities.Comment commentEntity) {
		CommentModel commentModel = new CommentModel();
		commentModel.setCommentedContent(commentEntity.getCommentedContent());
		commentModel.setPostedBy(commentEntity.getPostedBy());
		commentModel.setPostedOnRecepie(commentEntity.getRecepie().getRecepieId());
		return commentModel;
	}

	public static com.cookbook.entities.Comment buildCommentEntity(CommentModel commentModel,
			com.cookbook.entities.Recepie recepie) {
		com.cookbook.entities.Comment commentEntity = new com.cookbook.entities.Comment();
		commentEntity.setCommentedContent(commentModel.getCommentedContent());
		commentEntity.setPostedBy(commentModel.getPostedBy());
		commentEntity.setRecepie(recepie);
		return commentEntity;
	}

}
