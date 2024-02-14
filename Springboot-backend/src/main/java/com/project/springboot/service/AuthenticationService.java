package com.project.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMethod;

import com.project.springboot.model.AuthenticationResponse;
import com.project.springboot.model.Role;
import com.project.springboot.model.User;
import com.project.springboot.repository.UserRepository;

@Service
public class AuthenticationService {
	
	@Autowired
	private UserRepository repository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtService jwtService;

	public AuthenticationResponse register(User request) {
		
		User user = new User();
		user.setFirstname(request.getFirstname());
		user.setLastname(request.getLastname());
		user.setUsername(request.getUsername());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		
		user.setRole(request.getRole());
		
		user = repository.save(user);
		
		String token = jwtService.generateToken(user);
		
		Role userRole=user.getRole();
		String role=userRole.toString();
		
		return new AuthenticationResponse(token,role);
	}
	
	public AuthenticationResponse authenticate(User request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
				
		);
		
		User user = repository.findByUsername(request.getUsername()).orElseThrow();
		String token = jwtService.generateToken(user); 
		
		Role userRole=user.getRole();
		String role=userRole.toString();
		return new AuthenticationResponse(token, role);
	}
}
