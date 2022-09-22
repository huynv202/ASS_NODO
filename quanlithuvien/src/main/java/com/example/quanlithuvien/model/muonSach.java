package com.example.quanlithuvien.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "NV_HUY_MUONSACH")
public class muonSach {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;

    @ManyToOne
    @JoinColumn(name = "ID_R")
    private banDoc banDoc;

    @ManyToOne
    @JoinColumn(name = "ID_S")
    private Sach sach;

    @Column(name = "SL")
    private int soLuong;

    @Column(name = "NGAY_MUON")
    private Date date_borrow;

    @Column(name = "NGAY_TRA")
    private Date date_return;

    @Column(name = "STATUS")
    private Integer trang_thai;

    @Column(name = "GHICHU")
    private String ghi_chu;

}
