package com.cookbook.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cookbook.entities.Likes;
import com.cookbook.entities.Recepie;
import com.cookbook.entities.User;
import com.cookbook.model.CommentModel;
import com.cookbook.model.LikeModel;
import com.cookbook.model.RecepieModel;
import com.cookbook.repositories.CommentRepository;
import com.cookbook.repositories.LikesRepository;
import com.cookbook.repositories.RecepieRepository;
import com.cookbook.repositories.UserRepository;
import com.cookbook.utils.RecepieUtils;

@Repository
public class HomePageDAO {
	@Autowired
	RecepieRepository recepieRepository;
	@Autowired
	CommentRepository commentRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	LikesRepository likesRepository;

	public List<RecepieModel> getAllRecepies(String userEmail) {
		Iterable<Recepie> recepiesIterable = recepieRepository.findAll();
		List<Recepie> recepiesList = StreamSupport.stream(recepiesIterable.spliterator(), false)
				.collect(Collectors.toList());
		return recepiesList.stream().map(recepieEntity -> {
			Likes l = likesRepository.findByLikedOnRecepieAndEmailOfLikedUser(recepieEntity.getRecepieId(), userEmail);
			 RecepieModel buildRecepieModel = RecepieUtils.buildRecepieModel(recepieEntity, l != null);
			 buildRecepieModel.setTotalLikes(getLikesCount(recepieEntity.getRecepieId()));
			 return buildRecepieModel;

		}).collect(Collectors.toList());

	}
	public int getLikesCount(Long recepieId) {
		int allTheLikesCount = likesRepository.getAllTheLikesCount(recepieId);
		return allTheLikesCount;
	}


	public Recepie publishRecepie(Recepie recepieEntity) {
		Recepie SavedRecepie = recepieRepository.save(recepieEntity);
		return SavedRecepie;

	}

	public List<CommentModel> commentOnARecepie(CommentModel commentModel) {
		System.out.println("entered dao");
		System.out.println(commentModel);
		Optional<Recepie> optionalRecepie = recepieRepository.findById(commentModel.getPostedOnRecepie());

		if (optionalRecepie.isPresent()) {
			Recepie recepie = optionalRecepie.get();
			com.cookbook.entities.Comment commentEntity = RecepieUtils.buildCommentEntity(commentModel, recepie);
			recepie.getComments().add(commentEntity);
			commentEntity.setRecepie(recepie);
			Recepie updatedRecepie = recepieRepository.save(recepie);
			System.out.println("exited dao");
			// System.out.println("exited dao");

			return updatedRecepie.getComments().stream().map(t -> RecepieUtils.buildCommentModel(t))
					.collect(Collectors.toList());
		}
		System.out.println("exited dao");

		return new ArrayList<>();
	}

	public RecepieModel likeARecepie(LikeModel like) {
		Optional<Recepie> recepie = recepieRepository.findById(like.getLikedOnRecepie());
		System.out.println("presence"+recepie.isPresent());
		if (recepie.isPresent()) {
			User user = userRepository.findByEmail(like.getEmailOfLikedUser());
			System.out.println("user is"+user);
			if (user != null) {
				Likes likeinRepo = likesRepository.findByLikedOnRecepieAndEmailOfLikedUser(like.getLikedOnRecepie(),
						like.getEmailOfLikedUser());
				if (likeinRepo != null) {
					likesRepository.delete(likeinRepo);
				} else {
					Likes likeEntity = new Likes();
					likeEntity.setEmailOfLikedUser(like.getEmailOfLikedUser());
					likeEntity.setLikedOnRecepie(like.getLikedOnRecepie());
					likesRepository.save(likeEntity);
				}
				Likes l = likesRepository.findByLikedOnRecepieAndEmailOfLikedUser(like.getLikedOnRecepie(),
						like.getEmailOfLikedUser());
				if (l != null) {
					return RecepieUtils.buildRecepieModel(recepie.get(), true);
				} else {
					return RecepieUtils.buildRecepieModel(recepie.get(), false);
				}

			}

		}

		// return new RecepieModel();
		throw new RuntimeException("no such recepie found");
	}

	public List<RecepieModel> searchARecepie(String keyword) {
		System.out.println("key word in dao is " + keyword);
		List<Recepie> allFetchedRecepies = recepieRepository.findByNameContaining( keyword.trim().replace("\\", ""));
		return allFetchedRecepies.stream().map(entity -> {
			return RecepieUtils.buildRecepieModel(entity, false);
		}).collect(Collectors.toList());

	}
	public List<RecepieModel> searchARecepieById(Long recepieId) {
		System.out.println("Id of Recepie is" + recepieId);
		Optional<Recepie> allFetchedRecepies = recepieRepository.findById(recepieId );
		if(allFetchedRecepies.isEmpty()) {
			return null;
		}
		return allFetchedRecepies.stream().map(entity -> {
			return RecepieUtils.buildRecepieModel(entity, false);
		}).collect(Collectors.toList());

	}

}
