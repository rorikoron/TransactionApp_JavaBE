
package com.example.demo.controller;

import com.example.demo.entity.Transaction;
import com.example.demo.service.TransactionService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api")
public class ApiController {

    private final TransactionService service;

    public ApiController(TransactionService service) {
        this.service = service;
    }

    @PostMapping
    public void postApi(@RequestBody OrderRequest body) {
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime ts = LocalDateTime.parse(body.getTimeStamp(), fmt);
        service.saveOrder(body.getOrderId(), body.getExistOrder(), ts);
    }

    @GetMapping
    public List<Transaction> getApi() {
        return service.getAll();
    }
}
