package com.cts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.cts.model.SpecialistDetails;
import com.cts.repository.SpecialistDetailsRepository;

public class SpecialistDetailsService implements ISpecialistDetails {
	@Autowired
	SpecialistDetailsRepository repository;
	
	public List<SpecialistDetails> getAlldetails(){
		return (List<SpecialistDetails>) repository.findAll();
	}
	
	public SpecialistDetails createspecilaistdetails(SpecialistDetails specialistDetails) {
		return repository.save(specialistDetails);
	}
	
	
}
