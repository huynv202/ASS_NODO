package com.example.quanlithuvien.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "NV_HUY_READER")
public class banDoc {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;

    @Column(name = "MA_READER")
    private int maBanDoc;
    @Column(name = "RNAME")
    private String name;
    @Column(name = "R_ADD")
    private String address;

    @Column(name = "RPHONE")
    private String phone;

    @Column(name = "R_ACC")
    private Date date_of_account;

    @Column(name = "R_BIRTH")
    private Date date_of_birth;

    @Column(name = "RANK")
    private Integer rank;

}
