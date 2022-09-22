package com.example.quanlithuvien.service;

import com.example.quanlithuvien.model.banDoc;
import com.example.quanlithuvien.repository.ReaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReaderService {
    private final ReaderRepository readerRepository;

    @Autowired
    public ReaderService(ReaderRepository readerRepository) {
        this.readerRepository = readerRepository;
    }

    public List<banDoc> findAllReaders() {
        return readerRepository.findAll();
    }

    public banDoc addReader(banDoc reader) {
        return readerRepository.save(reader);
    }

    public banDoc updateReader(banDoc reader) {
        return readerRepository.save(reader);
    }

    public banDoc findReaderById(Integer id) {
        return readerRepository.findbandocById(id);
    }

    public void deleteReaderById(Integer id) {
        readerRepository.deleteById(id);
    }
}
