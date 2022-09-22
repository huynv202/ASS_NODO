package com.example.quanlithuvien.Controller;

import com.example.quanlithuvien.model.tacGia;
import com.example.quanlithuvien.repository.ActorRepository;
import com.example.quanlithuvien.service.ActorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/actor")
@CrossOrigin(origins = "http://localhost:4200")
public class ActorController {
    private final ActorService actorService;

    @Autowired
    public ActorController(ActorService actorService) {
        this.actorService = actorService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<tacGia>> getAllActor() {
        List<tacGia> actors = actorService.findAllActor();
        return ResponseEntity.ok(actors);
    }

    @PostMapping("/add")
    public ResponseEntity<tacGia> addActor(@RequestBody tacGia actor) {
        tacGia newActor = actorService.addActor(actor);
        return new ResponseEntity<>(newActor, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<tacGia> updateActor(@RequestBody tacGia actor) {
        tacGia updateActor = actorService.updateActor(actor);
        return new ResponseEntity<>(updateActor, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteActor(@PathVariable("id") Integer id) {
        actorService.deleteActorById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
