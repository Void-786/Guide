package com.project.guide_backend.repository;

import com.project.guide_backend.modal.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface ProfileRepository extends MongoRepository<Profile, String> {
}
