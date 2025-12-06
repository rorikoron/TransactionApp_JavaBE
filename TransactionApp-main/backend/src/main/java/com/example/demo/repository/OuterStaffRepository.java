package com.example.demo.repository;

import com.example.demo.entity.OuterStaff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OuterStaffRepository extends JpaRepository<OuterStaff, String> {
}
