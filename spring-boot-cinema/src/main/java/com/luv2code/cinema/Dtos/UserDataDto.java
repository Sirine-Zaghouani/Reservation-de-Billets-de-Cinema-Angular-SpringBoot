package com.luv2code.cinema.Dtos;

import com.luv2code.cinema.entity.User;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDataDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String phone;
    private String address;
    private String gouvernaurat;
    private String postalCode;
    private String avatarUrl;


    public static User toEntity(UserDataDto userDto){
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setAddress(userDto.getAddress());
        user.setGouvernaurat(userDto.getGouvernaurat());
        user.setPostalCode(userDto.getPostalCode());
        user.setPhone(userDto.getPhone());
        user.setAvatarUrl(userDto.getAvatarUrl());
        return user;
    }
    public static UserDataDto fromEntity(User user){
      return UserDataDto.builder()
              .id(user.getId())
              .username(user.getUsername())
              .address(user.getAddress())
              .gouvernaurat(user.getGouvernaurat())
              .postalCode(user.getPostalCode())
              .firstName(user.getFirstName())
              .lastName(user.getLastName())
              .phone(user.getPhone())
              .avatarUrl(user.getAvatarUrl())
              .build();
    }

}
