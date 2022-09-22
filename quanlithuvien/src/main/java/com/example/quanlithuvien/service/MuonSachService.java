package com.example.quanlithuvien.service;

import com.example.quanlithuvien.model.muonSach;
import com.example.quanlithuvien.repository.MuonSachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MuonSachService {
    private final MuonSachRepository muonSachRepository;

    @Autowired
    public MuonSachService(MuonSachRepository muonSachRepository) {
        this.muonSachRepository = muonSachRepository;
    }

    public void deleteMuonSachById(Integer id) {
        muonSachRepository.deleteById(id);
    }

    public muonSach addMuonSach(muonSach muonSach) {
        return muonSachRepository.save(muonSach);
    }

    public muonSach findMuonSachById(Integer id) {
        return muonSachRepository.findMuonSachById(id);
    }

    public muonSach updateMuonSach(muonSach muonSach) {
        return muonSachRepository.save(muonSach);
    }

    public List<muonSach> findAllMuonSach() {
        return muonSachRepository.findAll();
    }

}
