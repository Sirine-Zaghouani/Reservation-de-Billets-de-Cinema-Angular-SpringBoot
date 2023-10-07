package com.luv2code.cinema.serviceImpl;


import com.luv2code.cinema.Dtos.*;
import com.luv2code.cinema.entity.User;
import com.luv2code.cinema.exceptions.EntityNotFoundException;
import com.luv2code.cinema.exceptions.ErrorCodes;
import com.luv2code.cinema.exceptions.InvalidEntityException;
import com.luv2code.cinema.repository.UserRepo;
import com.luv2code.cinema.service.UserService;
import com.luv2code.cinema.validators.UserDetailsUpdateValidators;
import com.luv2code.cinema.validators.UserValidators;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;


    @Override
    public UserDto saveUser(UserDto user) {
        List<String> errors = UserValidators.validateUser(user);
        if(!errors.isEmpty()){
            throw new InvalidEntityException("invalid user details", ErrorCodes.USER_NOT_VALID, errors);
        }
        User u = userRepo.findByUsername(user.getUsername());
        if(user.getId() == null && u != null){
            throw new InvalidEntityException("Utilisateur avec cet identifiant existe déja", ErrorCodes.USER_EXISTS);
        }
        if(user.getAvatarUrl() == "" || user.getAvatarUrl() == null){
            user.setAvatarUrl(UserDto.generateAvatarUrl());
        }

        return UserDto.fromEntity(userRepo.save(UserDto.toEntity(user)));
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest user) {
       String username = user.getUsername();
       String password = user.getPassword();
       User loggedUser = userRepo.findByUsernameAndPassword(username, password);
       if(loggedUser == null){
           throw new EntityNotFoundException("identifiant/mot de passe incorrect", ErrorCodes.USER_NOT_FOUND);
       }
        return AuthenticationResponse.getAuthenticationResponseFromUser(loggedUser) ;
    }

    @Override
    public List<UserDto> findAllUsers() {
        return userRepo.findAllUsers().stream().map(UserDto::fromEntity).collect(Collectors.toList());
    }

    @Override
    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    @Override
    public UserDataDto findById(Long id) {
        User u = userRepo.findById(id).orElseThrow(
                ()-> new EntityNotFoundException("user with this id not found", ErrorCodes.USER_NOT_FOUND)
        );
        return UserDataDto.fromEntity(u);
    }

    @Override
    public void changePassword(PasswordChange passwordChange) {
        User u = userRepo.findById(passwordChange.getUserId()).orElseThrow(
                ()->new EntityNotFoundException("user avec cette id n'existe pas",ErrorCodes.USER_NOT_FOUND)
        );
        String actualPassword = passwordChange.getActualPassword();
        String newPassword = passwordChange.getNewPassword();
        String confirmNewPassword = passwordChange.getConfirmNewPassword();

        if(!u.getPassword().equals(actualPassword)){
            throw new InvalidEntityException("mot de passe actuel n'est pas valide",ErrorCodes.USER_NOT_VALID);
        }
        if(!newPassword.equals(confirmNewPassword)){
            throw new InvalidEntityException("veuillez confirmer votre mot de passe");
        }
        u.setPassword(newPassword);
        userRepo.save(u);
    }

    @Override
    public AuthenticationResponse updateUserDetails(UserDataDto userDataDto) {
        List<String> errors = UserDetailsUpdateValidators.validateUser(userDataDto);
        if(!errors.isEmpty()){
            throw new InvalidEntityException("Nom, prenom et email ne faut pas être nuls", errors);
        }
        User u = userRepo.getById(userDataDto.getId());
        u.setFirstName(userDataDto.getFirstName());
        u.setLastName(userDataDto.getLastName());
        u.setPhone(userDataDto.getPhone());
        u.setAddress(userDataDto.getAddress());
        u.setGouvernaurat(userDataDto.getGouvernaurat());
        u.setPostalCode(userDataDto.getPostalCode());
        u.setUsername(userDataDto.getUsername());
        u.setAvatarUrl(userDataDto.getAvatarUrl());
        return AuthenticationResponse.getAuthenticationResponseFromUser(userRepo.save(u));
    }
}
