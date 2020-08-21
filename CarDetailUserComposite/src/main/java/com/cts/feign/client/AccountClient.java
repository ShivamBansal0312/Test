package com.cts.feign.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cts.model.AccountDetails;

@FeignClient(url="http://localhost:8083", name="AccountDetails")
public interface AccountClient {

	@GetMapping("/accountdetailsbypan/{pan}")
	public List<AccountDetails> allaccountpan(@PathVariable("pan") int pan);
}
