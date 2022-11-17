package com.cookbook.model;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class RecepieModel { 

	private Long recepieId;
	private String name;
	private String description;
	private String ingredients;
	private String procedureOfTheRecepie;
	private Date dateOfPublishing;
	private String publishedBy;
	private String recepieURL;
	private List<CommentModel> commentModels;
	private boolean wheatherLikedByuser;
	private int totalLikes;
	public void setTotalLikes(int likesCount) {
		// TODO Auto-generated method stub
		this.totalLikes =  likesCount;
	}
	public Long getRecepieId() {
		return recepieId;
	}
	public void setRecepieId(Long recepieId) {
		this.recepieId = recepieId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getIngredients() {
		return ingredients;
	}
	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}
	public String getProcedureOfTheRecepie() {
		return procedureOfTheRecepie;
	}
	public void setProcedureOfTheRecepie(String procedureOfTheRecepie) {
		this.procedureOfTheRecepie = procedureOfTheRecepie;
	}
	public Date getDateOfPublishing() {
		return dateOfPublishing;
	}
	public void setDateOfPublishing(Date dateOfPublishing) {
		this.dateOfPublishing = dateOfPublishing;
	}
	public String getPublishedBy() {
		return publishedBy;
	}
	public void setPublishedBy(String publishedBy) {
		this.publishedBy = publishedBy;
	}
	public String getRecepieURL() {
		return recepieURL;
	}
	public void setRecepieURL(String recepieURL) {
		this.recepieURL = recepieURL;
	}
	public List<CommentModel> getCommentModels() {
		return commentModels;
	}
	public void setCommentModels(List<CommentModel> commentModels) {
		this.commentModels = commentModels;
	}
	public boolean isWheatherLikedByuser() {
		return wheatherLikedByuser;
	}
	public void setWheatherLikedByuser(boolean wheatherLikedByuser) {
		this.wheatherLikedByuser = wheatherLikedByuser;
	}
	public int getTotalLikes() {
		return totalLikes;
	}

}
