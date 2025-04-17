package com.study.springboot.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Cart {
	@Id
	private Long id;
	private String title;
	private Long count;
	private String memId;
}
