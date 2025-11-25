
package com.example.demo.controller;

import com.example.demo.entity.Menu;
import com.example.demo.repository.MenuRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    private final MenuRepository repo;

    public MenuController(MenuRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Menu> getMenu() {
        return repo.findAll();
    }
}
