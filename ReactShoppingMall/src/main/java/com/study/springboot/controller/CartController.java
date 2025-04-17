package com.study.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.study.springboot.domain.Cart;
import com.study.springboot.service.CartService;

@RestController
@RequestMapping("/react")
public class CartController {
	
	@Autowired
	CartService cartService;
	
	@PostMapping("/addCart")
	public String addcart(@RequestBody Cart cart) {
		cart.setMemId("user01");
		Cart result = cartService.addcart(cart);
		return "ok";
	}
	
	@GetMapping("/getCart")
	public List<Cart> getCart() {
		return cartService.getCart("user01");
	}
}
