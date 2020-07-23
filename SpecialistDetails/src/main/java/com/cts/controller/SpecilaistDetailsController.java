package com.cts.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.cts.model.SpecialistDetails;

import com.cts.service.SpecialistDetailsService;


public class SpecilaistDetailsController {

	@Autowired
	SpecialistDetailsService service;
	
	@GetMapping("/Specialistdetails")
	public List<SpecialistDetails> getAlldetails() {
	    return service.getAlldetails();
	}
	
	@PostMapping("/Specialistdetails")
	public SpecialistDetails createspecilaistdetails(@RequestBody SpecialistDetails specialistDetails) {
	    return service.createspecilaistdetails(specialistDetails);
	}
	
}
