package com.project.guide_backend.repository;

import com.project.guide_backend.modal.Testimonials;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface TestimonialsRepository extends MongoRepository<Testimonials, Long> {
}
