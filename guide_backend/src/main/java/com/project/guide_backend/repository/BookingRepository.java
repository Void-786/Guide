package com.project.guide_backend.repository;

import com.project.guide_backend.modal.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface BookingRepository extends MongoRepository<Booking, String> {
}
