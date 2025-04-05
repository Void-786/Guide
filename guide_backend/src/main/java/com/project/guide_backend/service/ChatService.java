package com.project.guide_backend.service;

import com.project.guide_backend.modal.ChatMessage;
import com.project.guide_backend.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ChatService {

    private final ChatRepository chatRepo;

    public ChatMessage saveMessage(ChatMessage message) {
        message.setTimestamp(new Date());
        return chatRepo.save(message);
    }

    public List<ChatMessage> getChatHistory(String senderId, String receiverId) {
        return chatRepo.findBySenderIdAndReceiverId(senderId, receiverId);
    }
}
