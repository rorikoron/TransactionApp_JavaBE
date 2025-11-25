
package com.example.demo.controller;

import lombok.Data;
import java.util.List;

@Data
public class OrderRequest {
    private String orderId;
    private List<ItemRequest> existOrder;
    private String timeStamp;
}
