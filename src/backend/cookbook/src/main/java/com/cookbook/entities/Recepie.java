package com.cookbook.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.cookbook.model.RecepieModel;

import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class Recepie {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long recepieId;
	private String name;
	private String description;
	private String ingredients;
	private String procedureOfTheRecepie;
	private Date dateOfPublishing;
	private String publishedBy;
	private String recepieURL;
	@OneToMany(orphanRemoval = true,cascade = CascadeType.ALL )
	private List<Comment> comments;
	public Long getRecepieId() {
		// TODO Auto-generated method stub
		return recepieId;
	}
	public List<Comment> getComments() {
		// TODO Auto-generated method stub
		return comments;
	}
	public void setDateOfPublishing(Date date) {
		// TODO Auto-generated method stub
		
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
	public Date getDateOfPublishing() {
		return dateOfPublishing;
	}
	public void setRecepieId(Long recepieId) {
		this.recepieId = recepieId;
	}
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	

}
