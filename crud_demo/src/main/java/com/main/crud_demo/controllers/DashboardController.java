package com.main.crud_demo.controllers;


import com.main.crud_demo.models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {


    @GetMapping("api/data")
    public User getData(){
        return new User(1, "Agustin", "agustinruiz96@hotmail.com");
    }

}
