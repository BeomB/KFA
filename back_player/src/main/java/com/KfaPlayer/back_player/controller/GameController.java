package com.KfaPlayer.back_player.controller;


import com.KfaPlayer.back_player.Entity.Game;
import com.KfaPlayer.back_player.repository.GameRepository;
import com.KfaPlayer.back_player.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class GameController {


    @Autowired
    GameRepository gameRepository;
    
    @GetMapping("/getgames")
    public List<Game> getGame()
    {
        return (List<Game>) gameRepository.findAll();

    }

}
