package com.cookbook.model;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class SearchRequest {
private String keyword;

public String getKeyword() {
	// TODO Auto-generated method stub
	return keyword;
}

public void setKeyword(String keyword) {
	this.keyword = keyword;
}
}
