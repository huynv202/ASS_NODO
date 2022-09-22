package com.example.quanlithuvien.Controller;

import com.example.quanlithuvien.model.banDoc;
import com.example.quanlithuvien.repository.ReaderRepository;
import com.example.quanlithuvien.service.ReaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reader")
@CrossOrigin(origins = "http://localhost:4200")
public class ReaderController {

    private final ReaderService readerService;

    @Autowired
    public ReaderController(ReaderService readerService) {
        this.readerService = readerService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<banDoc>> getAllReader() {
        List<banDoc> readers = readerService.findAllReaders();
        return new ResponseEntity<>(readers, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<banDoc> addReader(@RequestBody banDoc reader) {
        banDoc newReader = readerService.addReader(reader);
        return new ResponseEntity<>(newReader, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<banDoc> updateReader(@RequestBody banDoc reader) {
        banDoc updateReader = readerService.updateReader(reader);
        return new ResponseEntity<>(updateReader, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteReader(@PathVariable("id") Integer id) {
        readerService.deleteReaderById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
