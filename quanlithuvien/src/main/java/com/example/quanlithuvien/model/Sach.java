package com.example.quanlithuvien.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "NV_HUY_SACH")
public class Sach {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;

    @Column(name = "MA_SACH")
    private int maSach;

    @Column(name = "SNAME")
    private String name;

    @ManyToOne
    @JoinColumn(name = "ID_NXB")
    private nhaXuatBan nhaXuatBan;

    @ManyToOne
    @JoinColumn(name = "ID_TACGIA")
    private tacGia tacGia;

    @Column(name = "CHUDE")
    private String content;

    @Column(name = "NAM_XB")
    private Date namxuatban;

    @Column(name = "MOTA")
    private String mota;

    @Column(name = "SL_CL")
    private int soLuongConLai;
    @Column(name = "SL_DM")
    private int soLuongDangMuon;

    @Column(name = "TONG_SACH")
    private int toTal;

}
