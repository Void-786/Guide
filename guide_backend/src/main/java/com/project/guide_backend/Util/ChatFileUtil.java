package com.project.guide_backend.Util;

import com.project.guide_backend.modal.ChatMessage;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class ChatFileUtil {

    public static File getChatFile(List<ChatMessage> chatMessages) {

        File chatFile = null;
        try {
            chatFile = File.createTempFile("chat", ".txt");
            try (BufferedWriter bw = new BufferedWriter(new FileWriter(chatFile))) {
                for (ChatMessage msg : chatMessages) {
                    bw.write(formatMessage(msg));
                    bw.newLine();
                }
            }
        } catch (IOException e) {
            System.err.println("Error writing to temporary file: " + e.getMessage());
        }
        return chatFile;
    }

    private static String formatMessage(ChatMessage msg) {
        return String.format("%s: %s\n", msg.getSenderId(), msg.getMessage());
    }
}
