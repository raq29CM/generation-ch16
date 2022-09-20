package com.generation.arcm;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*Se utiliza @RestController para poder ser ejecutado por 
 * el protocolo HTTP*/
@RestController
@RequestMapping("/")
public class HolaMundo {
	/* @GetMapping("/")
	public String hola() {
		return "index";
	} */
}
