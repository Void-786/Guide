package com.project.guide_backend.controller;

import com.project.guide_backend.Dto.BookingRequest;
import com.project.guide_backend.modal.Booking.Booking;
import com.project.guide_backend.modal.Booking.BookingStatus;
import com.project.guide_backend.modal.Services;
import com.project.guide_backend.modal.User.Users;
import com.project.guide_backend.repository.BookingRepository;
import com.project.guide_backend.repository.ServicesRepository;
import com.project.guide_backend.repository.UserRepository;
import com.project.guide_backend.service.BookingMailService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/booking")
public class BookingController {

    private final ServicesRepository servicesRepo;
    private final BookingRepository bookingRepo;
    private final BookingMailService bookingMailService;
    private final UserRepository userRepo;

    @PostMapping("/book-session")
    @PreAuthorize("hasRole('MENTEE')")
    public Booking bookSession(@RequestBody BookingRequest dto) {
        Services service = servicesRepo.findById(dto.getServiceId())
                .filter(Services::isAvailable)
                .orElseThrow(() -> new RuntimeException("Service not available or not found"));

        Users mentee = userRepo.findById(dto.getMenteeId())
                .orElseThrow(() -> new RuntimeException("Mentee not found"));

        Users mentor = userRepo.findById(dto.getMentorId())
                .orElseThrow(() -> new RuntimeException("Mentor not found"));

        Booking booking = Booking.builder()
                .menteeId(dto.getMenteeId())
                .mentorId(dto.getMentorId())
                .service(service)
                .scheduledAt(dto.getScheduledAt())
                .status(BookingStatus.PENDING)
                .build();

        Booking savedBooking = bookingRepo.save(booking);

        bookingMailService.sendBookingConfirmationEmail(
                mentee.getEmail(),
                savedBooking,
                service,
                mentor.getFullName()
        );

        return savedBooking;
    }
}
