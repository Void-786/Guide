package com.project.guide_backend.controller;

import com.project.guide_backend.Dto.AuthRequest;
import com.project.guide_backend.modal.User.Users;
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
    public ResponseEntity<Users> register(@ModelAttribute AuthRequest authRequest) {
        Users users = new Users();
        users.setFullName(authRequest.getFullName());
        users.setEmail(authRequest.getEmail());
        users.setPassword(authRequest.getPassword());
        users.setRole(authRequest.getRole());

        try {
            Users savedUsers = authService.register(users);
            return ResponseEntity.ok(savedUsers);
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
