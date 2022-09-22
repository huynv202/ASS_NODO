package com.example.quanlithuvien.service;

import com.example.quanlithuvien.model.Sach;
import com.example.quanlithuvien.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void deleteBookById(Integer id) {
        bookRepository.deleteById(id);
    }

    public Sach addBook(Sach book) {
        return bookRepository.save(book);
    }

    public Sach findBookById(Integer id) {
        return bookRepository.findBookById(id);
    }

    public void updateBook(Sach book) {
        bookRepository.save(book);
    }

    public List<Sach> findAllBook() {
        return bookRepository.findAll();
    }

}
