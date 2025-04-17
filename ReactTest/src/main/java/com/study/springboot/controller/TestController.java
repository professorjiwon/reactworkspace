package com.study.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.study.springboot.domain.Menu;
import com.study.springboot.service.MenuService;

@RestController
@RequestMapping("/api")
public class TestController {
	
	@Autowired
	MenuService menuService;
	
	@GetMapping("/test")
	public String hello() {
		return "Hello~~ 테스트 입니다";
	}
	
	@GetMapping("/menuall")
	public List<Menu> menuall() {
		return menuService.menuAllList();
	}
	
	@PostMapping("/addmenu")
	public Menu addMenu(@RequestBody Menu m) {
		return menuService.insertMenu(m);
	}
}
