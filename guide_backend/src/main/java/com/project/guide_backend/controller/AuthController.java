package com.project.guide_backend.controller;

import com.project.guide_backend.Dto.AuthRequest;
import com.project.guide_backend.modal.User;
import com.project.guide_backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody AuthRequest authRequest) {
        User user = new User();
        user.setFullName(authRequest.getFullName());
        user.setEmail(authRequest.getEmail());
        user.setPassword(authRequest.getPassword());
        user.setRole(authRequest.getRole());

        try {
            User savedUser = authService.register(user);
            return ResponseEntity.ok(savedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
        try {
            String token = authService.login(email, password);
            return ResponseEntity.ok(token);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
