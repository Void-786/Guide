package com.project.guide_backend.service;

import com.project.guide_backend.modal.User.Users;
import com.project.guide_backend.repository.UserRepository;
import com.project.guide_backend.security.Jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class AuthService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public Users register(Users users) {
        if (userRepo.existsByEmail(users.getEmail())) {
            throw new RuntimeException("User already exists");
        }

        users.setPassword(passwordEncoder.encode(users.getPassword()));
        return userRepo.save(users);
    }

    public String login(String email, String password) {
        Users users = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(password, users.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return jwtUtil.generateToken(users.getEmail());
    }
}
