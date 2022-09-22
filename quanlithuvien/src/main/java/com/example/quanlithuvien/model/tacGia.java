package com.example.quanlithuvien.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "NV_HUY_TACGIA")
public class tacGia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;

    @Column(name = "MA_TACGIA")
    private int maTacGia;

    @Column(name = "TNAME")
    private String name;

    @Column(name = "TG_ADD")
    private String address;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "MOTA")
    private String mota;

}
