package com.example.quanlithuvien.model;

import javax.persistence.*;

@Entity(name = "NV_HUY_NXB")
public class nhaXuatBan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;

    @Column(name = "NNAME")
    private String name;

    @Column(name = "MA_NXB")
    private int maNXB;
    @Column(name = "STATUS")
    private int trang_thai;

    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "MOTA")
    private String mo_ta;

    public nhaXuatBan() {
    }

    public int getMaNXB() {
        return maNXB;
    }

    public void setMaNXB(int maNXB) {
        this.maNXB = maNXB;
    }

    public nhaXuatBan(int id, String name, int maNXB, int trang_thai, String address, String mo_ta) {
        this.id = id;
        this.name = name;
        this.maNXB = maNXB;
        this.trang_thai = trang_thai;
        this.address = address;
        this.mo_ta = mo_ta;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTrang_thai() {
        return trang_thai;
    }

    public void setTrang_thai(int trang_thai) {
        this.trang_thai = trang_thai;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMo_ta() {
        return mo_ta;
    }

    public void setMo_ta(String mo_ta) {
        this.mo_ta = mo_ta;
    }
}
