package com.cookbook.repositories;

import org.springframework.data.repository.CrudRepository;

import com.cookbook.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {
User findByEmail(String email);
}
