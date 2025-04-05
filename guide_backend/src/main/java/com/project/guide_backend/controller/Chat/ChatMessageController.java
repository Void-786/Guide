package com.project.guide_backend.controller.Chat;

import com.project.guide_backend.modal.ChatMessage;
import com.project.guide_backend.repository.ChatRepository;
import com.project.guide_backend.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ChatMessageController {

    @Autowired
    private SimpMessagingTemplate template;
    private final ChatService chatService;
    private ChatRepository chatRepo;

    @MessageMapping("/chat") //receive message from client
    public void processMessage(@Payload ChatMessage message) {
        ChatMessage savedMessage = chatService.saveMessage(message);

        //send message to the recipient
        template.convertAndSendToUser(
                message.getReceiverId(),
                "/queue/messages",
                message
        );
    }
}
