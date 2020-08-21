package com.cts.feign.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cts.model.CustomerDetails;


@FeignClient(url="http://localhost:8081", name="CustomerDetails")
public interface CustomerClient {
	@GetMapping("/customerbypan/{pan}")
	public CustomerDetails customerbypan(@PathVariable("pan") int pan);
}
