package com.cookbook.repositories;

import org.springframework.data.repository.CrudRepository;

import com.cookbook.entities.Likes;

public interface LikesRepository extends CrudRepository<Likes, Long> {
	Likes findByLikedOnRecepieAndEmailOfLikedUser(Long recepieId,String email);
}