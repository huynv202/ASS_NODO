package com.example.quanlithuvien.repository;

import com.example.quanlithuvien.model.muonSach;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MuonSachRepository extends JpaRepository<muonSach, Integer>, CrudRepository<muonSach, Integer> {

    // @Query("delete from NV_HUY_MUONSACH a where a.id = ?1")
    @Override
    void deleteById(Integer id);

    @Query("SELECT m FROM NV_HUY_MUONSACH m WHERE m.id = ?1")
    muonSach findMuonSachById(Integer id);

    // select name book and name reader

}
