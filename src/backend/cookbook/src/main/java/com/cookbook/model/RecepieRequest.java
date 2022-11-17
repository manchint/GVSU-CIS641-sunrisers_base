package com.cookbook.model;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
 public class RecepieRequest {

	private String name;
	private String description;
	private String ingredients;
	private String procedureOfTheRecepie;
	private String publishedBy;
	private MultipartFile imageOfTheRecepie;
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
	public String getPublishedBy() {
		return publishedBy;
	}
	public void setPublishedBy(String publishedBy) {
		this.publishedBy = publishedBy;
	}
	public MultipartFile getImageOfTheRecepie() {
		return imageOfTheRecepie;
	}
	public void setImageOfTheRecepie(MultipartFile imageOfTheRecepie) {
		this.imageOfTheRecepie = imageOfTheRecepie;
	}

}
