package com.project.guide_backend.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "messages")
public class ChatMessage {

    private String id;
    private String senderId;
    private String receiverId;
    private String message;
    private Date timestamp;
}
