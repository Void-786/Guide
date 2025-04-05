package com.project.guide_backend.service;

import com.project.guide_backend.modal.Booking.Booking;
import com.project.guide_backend.modal.Services;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class BookingMailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public void sendBookingConfirmationEmail(String toEmail, Booking booking, Services service, String mentorName) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(sender);
            helper.setTo(toEmail);
            helper.setSubject("Booking Confirmation - " + service.getServiceName());

            String body = String.format("""
                    Hello,

                    Your session has been successfully booked!

                    ✅ Service: %s
                    👨‍🏫 Mentor: %s
                    📅 Scheduled At: %s
                    💵 Price: ₹%.2f
                    🕒 Duration: %s

                    Thank you for using our platform!

                    - Guide Platform Team
                    """,
                    service.getServiceName(),
                    mentorName,
                    booking.getScheduledAt(),
                    service.getPrice(),
                    service.getDuration());

            helper.setText(body, false);
            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send booking email: " + e.getMessage());
        }
    }
}
