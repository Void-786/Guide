package com.project.guide_backend.Dto;

import com.project.guide_backend.modal.Role;
import lombok.Data;

@Data
public class AuthRequest {
    private String fullName;
    private String email;
    private String password;
    private Role role;
}
