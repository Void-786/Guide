package com.project.guide_backend.service;

import com.project.guide_backend.Dto.BookingRequest;
import com.project.guide_backend.modal.Booking.Booking;
import com.project.guide_backend.modal.Booking.BookingStatus;
import com.project.guide_backend.modal.Services;
import com.project.guide_backend.repository.BookingRepository;
import com.project.guide_backend.repository.ServicesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BookingService {

    private final BookingRepository bookingRepo;
    private final ServicesRepository servicesRepo;

    public Booking bookSession(BookingRequest dto) {
        Services service = servicesRepo.findById(dto.getServiceId())
                .filter(Services::isAvailable)
                .orElseThrow(() -> new RuntimeException("Service not available or not found"));

        Booking booking = Booking.builder()
                .menteeId(dto.getMenteeId())
                .mentorId(dto.getMentorId())
                .service(service)
                .scheduledAt(dto.getScheduledAt())
                .status(BookingStatus.PENDING)
                .build();

        return bookingRepo.save(booking);
    }
}
