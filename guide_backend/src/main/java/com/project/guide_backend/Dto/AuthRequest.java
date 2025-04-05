package com.project.guide_backend.Dto;

import com.project.guide_backend.modal.User.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthRequest {
    private String fullName;
    private String email;
    private String password;
    private Role role;
}
