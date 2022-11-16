package com.cookbook.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cookbook.entities.Comment;
import com.cookbook.entities.Recepie;

public interface CommentRepository extends CrudRepository<Comment, Long> {
	List<Comment> findByRecepie(Recepie recepie);

}
