package com.project.guide_backend.security.Jwt;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;

public class JWTAuthentication extends AbstractAuthenticationToken {

    private final UserDetails principal;
    private final String credentials;

    public JWTAuthentication(UserDetails principal, String credentials) {
        super(principal.getAuthorities());
        this.principal = principal;
        this.credentials = credentials;
        super.setAuthenticated(true);
    }

    @Override
    public Object getCredentials() {
        return credentials;
    }

    @Override
    public UserDetails getPrincipal() {
        return principal;
    }
}
