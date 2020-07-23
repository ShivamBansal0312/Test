package com.cts.service;
import java.util.List;
import java.util.Optional;

import com.cts.model.SpecialistDetails;

public interface ISpecialistDetails {
	public List<SpecialistDetails> getAlldetails();
	public SpecialistDetails createspecilaistdetails(SpecialistDetails specialistDetails);
	
}
