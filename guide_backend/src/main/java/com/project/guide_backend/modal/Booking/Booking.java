package com.project.guide_backend.modal.Booking;

import com.project.guide_backend.modal.Services;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "bookings")
public class Booking {

    @Id
    private String id;
    private Long menteeId;
    private Long mentorId;

    @DBRef
    private Services service;

    private Date scheduledAt;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;
}
