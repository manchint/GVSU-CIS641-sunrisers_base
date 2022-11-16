package com.cookbook.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cookbook.entities.Likes;

public interface LikesRepository extends CrudRepository<Likes, Long> {
	Likes findByLikedOnRecepieAndEmailOfLikedUser(Long recepieId,String email);
	@Query("SELECT COUNT(l) FROM Likes l WHERE l.likedOnRecepie=:likedOnRecepie")
    int getAllTheLikesCount(@Param("likedOnRecepie") Long likedOnRecepie);
}