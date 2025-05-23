package com.project.guide_backend.repository;

import com.project.guide_backend.modal.Booking.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;

@EnableMongoRepositories
public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByMenteeId(Long menteeId);
    List<Booking> findByMentorId(Long mentorId);
}
