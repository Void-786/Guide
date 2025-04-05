    package com.project.guide_backend.controller.Chat;

    import com.project.guide_backend.modal.ChatMessage;
    import com.project.guide_backend.service.ChatService;
    import lombok.RequiredArgsConstructor;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RequestParam;
    import org.springframework.web.bind.annotation.RestController;

    import java.util.List;

    @RequiredArgsConstructor
    @RestController
    public class ChatController {

        private final ChatService chatService;

        @GetMapping("/history")
        public List<ChatMessage> getChatHistory(@RequestParam String senderId, @RequestParam String receiverId) {
            return chatService.getChatHistory(senderId, receiverId);
        }
    }
