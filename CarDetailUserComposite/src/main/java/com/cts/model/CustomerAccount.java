package com.cts.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class CustomerAccount {
	private Long pan;
	  private String firstname;
	  private List<AccountDetails> accountlist;
	  
	  
}
