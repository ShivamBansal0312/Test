package com.cts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.model.AccountDetails;

@Repository
public interface AccountDetailsRepository extends JpaRepository<AccountDetails, Long>{
//	@Query("Select p from accountdetails p where p.pan=?1")
//	public List<AccountDetails> getSerAccountsByPan(long pan);
	

@Query(value="SELECT * from account where pan=?", nativeQuery = true)
	List<AccountDetails> findById(int pan);

}
