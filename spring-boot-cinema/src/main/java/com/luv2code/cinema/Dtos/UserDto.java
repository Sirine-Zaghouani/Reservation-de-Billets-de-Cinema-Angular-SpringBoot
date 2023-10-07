package com.luv2code.cinema.Dtos;

import com.luv2code.cinema.entity.User;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.Random;

@Data
@Builder
public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String phone;
    private LocalDate creationDate;
    private String role;
    private String address;
    private String gouvernaurat;
    private String postalCode;
    private String avatarUrl;


    public static User toEntity(UserDto userDto){
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setRole(userDto.getRole());
        user.setAddress(userDto.getAddress());
        user.setGouvernaurat(userDto.getGouvernaurat());
        user.setPostalCode(userDto.getPostalCode());
        user.setPhone(userDto.getPhone());
        user.setAvatarUrl(userDto.getAvatarUrl());
        return user;
    }
    public static UserDto fromEntity(User user){
      return UserDto.builder()
              .id(user.getId())
              .username(user.getUsername())
              .password(user.getPassword())
              .role(user.getRole())
              .address(user.getAddress())
              .firstName(user.getFirstName())
              .lastName(user.getLastName())
              .creationDate(user.getCreationDate())
              .phone(user.getPhone())
              .gouvernaurat(user.getGouvernaurat())
              .postalCode(user.getPostalCode())
              .avatarUrl(user.getAvatarUrl())
              .build();
    }


    public static String generateAvatarUrl(){
        String[] avatarsInit = {"assets/img/avatars/av-1.png", "assets/img/avatars/av-2.png","assets/img/avatars/av-3.png","assets/img/avatars/av-4.png","assets/img/avatars/av-5.png",};
        return avatarsInit[new Random().nextInt(avatarsInit.length)];
    }

}
