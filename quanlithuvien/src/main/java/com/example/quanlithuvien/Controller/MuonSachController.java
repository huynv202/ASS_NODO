package com.example.quanlithuvien.Controller;

import com.example.quanlithuvien.model.muonSach;
import com.example.quanlithuvien.service.MuonSachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/muonsach")
@CrossOrigin(origins = "http://localhost:4200")
public class MuonSachController {
    private final MuonSachService muonSachService;

    @Autowired
    public MuonSachController(MuonSachService muonSachService) {
        this.muonSachService = muonSachService;
    }

    // @GetMapping("/all")
    // public ResponseEntity<List<muonSach>> getAllBookBorrow() {
    // List<muonSach> bookBorrows = muonSachService.findAllMuonSach();
    // return new ResponseEntity<>(bookBorrows, HttpStatus.OK);
    // }
    @GetMapping("/all")
    public List<muonSach> getAll() {
        System.out.println("ok");
        return muonSachService.findAllMuonSach();

    }

    @PostMapping("/add")
    public ResponseEntity<muonSach> addBookBorrow(@RequestBody muonSach bookBorrow) {
        muonSach newBookBorrow = muonSachService.addMuonSach(bookBorrow);
        return new ResponseEntity<>(newBookBorrow, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<muonSach> updateBookBorrow(@RequestBody muonSach bookBorrow) {
        muonSach updateBookBorrow = muonSachService.updateMuonSach(bookBorrow);
        return new ResponseEntity<>(updateBookBorrow, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBookBorrow(@PathVariable("id") Integer id) {
        muonSachService.deleteMuonSachById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
