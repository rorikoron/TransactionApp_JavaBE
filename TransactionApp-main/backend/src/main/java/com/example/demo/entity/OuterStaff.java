package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;

@Data
@Entity
@Table(name = "outer_staff")
public class OuterStaff {

    @Id
    private String id;     // UUID（文字列扱い）

    @Column(name = "name")
    private String name;

    @Column(name = "birthdate")
    private String birthdate;
}
