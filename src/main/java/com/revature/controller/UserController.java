package com.revature.application.controller;

import com.revature.dao.*;
import com.revature.beans.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	
  @RequestMapping(value="/{username}", method=RequestMethod.GET)
  public ResponseEntity getUser(@PathVariable String username) {
    UsersDao usersDao = new UsersDao();
    Users user = usersDao.getUser(username);
    HttpHeaders responseHeaders = new HttpHeaders();
    if(user == null) {
      return new ResponseEntity(user, responseHeaders, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity(user, responseHeaders, HttpStatus.ACCEPTED);
  }

  @PostMapping()
  public ResponseEntity postUser(@RequestBody Users input) {
    Users user = input;
    UsersDao usersDao = new UsersDao();
    usersDao.saveUser(user);
    HttpHeaders responseHeaders = new HttpHeaders();
    return new ResponseEntity("User created", responseHeaders, HttpStatus.ACCEPTED);
  }
  //@CrossOrigin(origins = "http://localhost:8181")
  @RequestMapping(value="/{username}", method=RequestMethod.PUT)
  public ResponseEntity updateUser(@RequestBody Users input, @PathVariable String username) {
    Users user = input;
    UsersDao usersDao = new UsersDao();
    Users currentUser = usersDao.getUser(username);
    HttpHeaders responseHeaders = new HttpHeaders();
    if(currentUser == null) {
      return new ResponseEntity("Resource not found", responseHeaders, HttpStatus.NOT_FOUND);
    }
    currentUser.setPassword(input.getPassword());    
    usersDao.updateUser(currentUser);
    return new ResponseEntity(currentUser, responseHeaders, HttpStatus.OK);
  }

}
