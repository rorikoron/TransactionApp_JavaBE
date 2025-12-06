
package com.example.demo.controller;

import com.example.demo.entity.OuterStaff;
import com.example.demo.repository.OuterStaffRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/outer")
public class OuterStaffController {

    private final OuterStaffRepository repo;

    public OuterStaffController(OuterStaffRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<OuterStaff> getStaff() {
        return repo.findAll();
    }
}
