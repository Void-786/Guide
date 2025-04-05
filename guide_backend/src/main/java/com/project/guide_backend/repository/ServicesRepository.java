package com.project.guide_backend.repository;

import com.project.guide_backend.modal.Services;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;

@EnableMongoRepositories
public interface ServicesRepository extends MongoRepository<Services, String> {
    List<Services> findByMentorId(String mentorId);
}
