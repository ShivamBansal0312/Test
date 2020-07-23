package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.model.SpecialistDetails;

@Repository
public interface SpecialistDetailsRepository extends JpaRepository<SpecialistDetails, Long>{

}
