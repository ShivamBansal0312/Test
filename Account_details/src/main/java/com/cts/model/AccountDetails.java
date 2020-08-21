package com.cts.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@Data
@AllArgsConstructor
@NoArgsConstructor
@NonNull
@Entity(name="account")
public class AccountDetails {
	
	@Id
	private Integer pan;
	private Long accountnumber;
	private String ifsccode;
	private String bankname;
	private Long  micrcode;
	
	}
