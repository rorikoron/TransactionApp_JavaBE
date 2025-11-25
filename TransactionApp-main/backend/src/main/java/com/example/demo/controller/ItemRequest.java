
package com.example.demo.controller;

import lombok.Data;

@Data
public class ItemRequest {
    private String orderName;
    private int orderPrice;
    private int orderQuantity;
}
