package com.cts.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cts.feign.client.AccountClient;
import com.cts.feign.client.CustomerClient;
import com.cts.model.AccountDetails;
import com.cts.model.CustomerDetails;
import com.cts.model.CustomerAccount;



@RestController

public class FeignControllerComposite {
	@Autowired
	private CustomerClient customerClient;
	
	@Autowired
	private AccountClient accountClient;
	
	
	
	//to get the detail of all review for a specific product 
	@GetMapping("/customer/{pan}")
	public CustomerAccount CustomerWithAccount(@PathVariable("pan")int pan) {
		
		CustomerDetails customerDetails = customerClient.customerbypan(pan);
		List<AccountDetails> accountList = accountClient.allaccountpan(pan);
		CustomerAccount customerAccount = new CustomerAccount(customerDetails.getPan(),
				customerDetails.getFirstname(),accountList);

		
				return customerAccount;	
		}



}
