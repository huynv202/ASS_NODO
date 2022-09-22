package com.example.quanlithuvien.repository;

import com.example.quanlithuvien.model.nhaXuatBan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface NhaXuatBanrepository extends JpaRepository<nhaXuatBan, Integer>, CrudRepository<nhaXuatBan, Integer> {

    // @Query("delete from NV_HUY_NXB a where a.id = :id")
    @Override
    void deleteById(Integer id);

    @Query("SELECT n FROM NV_HUY_NXB n WHERE n.id = ?1")
    nhaXuatBan findNhaXuatBanById(Integer id);
}
