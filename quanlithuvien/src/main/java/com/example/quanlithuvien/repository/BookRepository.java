package com.example.quanlithuvien.repository;

import com.example.quanlithuvien.model.Sach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

public interface BookRepository extends JpaRepository<Sach, Integer>, CrudRepository<Sach, Integer> {

    // @Query("delete from NV_HUY_SACH a where a.id = :id")
    @Override
    void deleteById(Integer id);

    @Query("SELECT s FROM NV_HUY_SACH s WHERE s.id = ?1")
    Sach findBookById(Integer id);

}
