package com.cookbook.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long commentId;
	private String commentedContent;
	private String postedBy;
	@ManyToOne
	@JoinColumn(name = "rId")
	private Recepie recepie;
	public void setRecepie(Recepie recepie2) {
		// TODO Auto-generated method stub
		this.recepie = recepie2;
	}
	public String getCommentedContent() {
		// TODO Auto-generated method stub
		return null;
	}
	public Long getCommentId() {
		return commentId;
	}
	public void setCommentId(Long commentId) {
		this.commentId = commentId;
	}
	public String getPostedBy() {
		return postedBy;
	}
	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}
	public Recepie getRecepie() {
		return recepie;
	}
	public void setCommentedContent(String commentedContent) {
		this.commentedContent = commentedContent;
	}

}
