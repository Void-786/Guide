package com.project.guide_backend.repository;

import com.project.guide_backend.modal.User.MenteeProfile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface MenteeProfileRepository extends MongoRepository<MenteeProfile, String> {
}
