
package com.example.demo.controller;

import com.example.demo.entity.InterStaff;
import com.example.demo.repository.InterStaffRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/inter")
public class InterStaffController {

    private final InterStaffRepository repo;

    public InterStaffController(InterStaffRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<InterStaff> getMenu() {
        return repo.findAll();
    }
}
