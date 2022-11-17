package com.cookbook.model;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class CommentModel {

private String commentedContent;
private String postedBy;
private Long postedOnRecepie;
public String getCommentedContent() {
	return commentedContent;
}
public void setCommentedContent(String commentedContent) {
	this.commentedContent = commentedContent;
}
public String getPostedBy() {
	return postedBy;
}
public void setPostedBy(String postedBy) {
	this.postedBy = postedBy;
}
public Long getPostedOnRecepie() {
	return postedOnRecepie;
}
public void setPostedOnRecepie(Long postedOnRecepie) {
	this.postedOnRecepie = postedOnRecepie;
}
}
