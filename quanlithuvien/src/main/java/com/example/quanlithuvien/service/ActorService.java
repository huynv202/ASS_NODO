package com.example.quanlithuvien.service;

import com.example.quanlithuvien.model.tacGia;
import com.example.quanlithuvien.repository.ActorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActorService {
    private final ActorRepository actorrepository;

    @Autowired
    public ActorService(ActorRepository actorrepository) {
        this.actorrepository = actorrepository;
    }

    public void deleteActorById(Integer id) {
        actorrepository.deleteById(id);
    }

    public tacGia addActor(tacGia actor) {
        return actorrepository.save(actor);
    }

    public tacGia findActorById(Integer id) {
        return actorrepository.findActorById(id);
    }

    public tacGia updateActor(tacGia actor) {
        return actorrepository.save(actor);
    }

    public List<tacGia> findAllActor() {
        return actorrepository.findAll();
    }

}
