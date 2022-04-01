package com.KfaPlayer.back_player.controller;


import com.KfaPlayer.back_player.Entity.Game;
import com.KfaPlayer.back_player.repository.GameRepository;
import com.KfaPlayer.back_player.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://3.34.181.38:80")

@RestController
public class GameController {


    @Autowired
    GameRepository gameRepository;

    @GetMapping("/getgames")
    public List<Game> getGame()
    {
        return (List<Game>) gameRepository.findAll();
    }

    @PostMapping("/updategame")
    public String updateGame( @RequestBody Game update_game)
    {
        gameRepository.save(update_game);
        return "성공";
    }

    @DeleteMapping("/deletegame/{id}")
    public String DeleteGame(@PathVariable Long id)
    {
        gameRepository.deleteById(id);
        return "삭제 완료";
    }


}
