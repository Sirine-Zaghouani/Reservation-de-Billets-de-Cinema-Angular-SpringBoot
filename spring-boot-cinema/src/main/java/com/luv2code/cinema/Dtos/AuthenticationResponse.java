package com.luv2code.cinema.Dtos;

import com.luv2code.cinema.entity.User;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private Long id;

    private String username;
    private String role;
    private String avatarUrl;

    public static AuthenticationResponse getAuthenticationResponseFromUser(User user){
        return AuthenticationResponse.builder()
                .username(user.getUsername())
                .id(user.getId())
                .role(user.getRole())
                .avatarUrl(user.getAvatarUrl())
                .build();
    }

}
