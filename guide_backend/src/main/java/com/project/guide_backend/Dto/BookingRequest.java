package com.project.guide_backend.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class BookingRequest {
    private Long menteeId;
    private Long mentorId;
    private String serviceId;
    private Date scheduledAt;
}
