package com.example.quanlithuvien.service;

import com.example.quanlithuvien.model.nhaXuatBan;
import com.example.quanlithuvien.repository.NhaXuatBanrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NhaXuatBanService {
    private final NhaXuatBanrepository nhaXuatBanRepository;

    @Autowired
    public NhaXuatBanService(NhaXuatBanrepository nhaXuatBanRepository) {
        this.nhaXuatBanRepository = nhaXuatBanRepository;
    }

    public void deleteNhaXuatBanById(Integer id) {
        nhaXuatBanRepository.deleteById(id);
    }

    public nhaXuatBan addNhaXuatBan(nhaXuatBan nhaXuatBan) {
        return nhaXuatBanRepository.save(nhaXuatBan);
    }

    public Optional<nhaXuatBan> findById(Integer id) {
        return nhaXuatBanRepository.findById(id);
    }

    public nhaXuatBan updateNhaXuatBan(nhaXuatBan nhaXuatBan) {
        return nhaXuatBanRepository.save(nhaXuatBan);
    }

    public List<nhaXuatBan> findAllNhaXuatBan() {
        return nhaXuatBanRepository.findAll();
    }

}
