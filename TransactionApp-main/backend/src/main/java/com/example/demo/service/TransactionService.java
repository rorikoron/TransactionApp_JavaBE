
package com.example.demo.service;

import com.example.demo.entity.Transaction;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.controller.ItemRequest;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;
import java.time.LocalDateTime;
@Service
public class TransactionService {

    private final TransactionRepository repo;

    public TransactionService(TransactionRepository repo) {
        this.repo = repo;
    }

    public void saveOrder(String orderId, List<ItemRequest> existOrder, LocalDateTime timeStamp) {
        for (ItemRequest item : existOrder) {
            Transaction t = new Transaction();
            t.setId(UUID.randomUUID().toString());
            t.setOrderId(orderId);
            t.setOrderName(item.getOrderName());
            t.setOrderPrice(item.getOrderPrice());
            t.setOrderQuantity(item.getOrderQuantity());
            t.setTimeStamp(timeStamp);
            repo.save(t);
        }
    }

    public List<Transaction> getAll() {
        return repo.findAll();
    }
}
