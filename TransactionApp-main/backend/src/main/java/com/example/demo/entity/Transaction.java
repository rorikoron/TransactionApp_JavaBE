
package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.Column;
import java.time.LocalDateTime;
@Data
@Entity
@Table(name = "transaction")
public class Transaction {
    
    @Id
    private String id;@Column(name = "orderId")
    private String orderId;

    @Column(name = "orderName")
    private String orderName;

    @Column(name = "orderPrice")
    private int orderPrice;

    @Column(name = "orderQuantity")
    private int orderQuantity;

    @Column(name = "timeStamp")
    private  LocalDateTime timeStamp;
}
