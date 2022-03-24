package com.KfaPlayer.back_player.controller;


import com.KfaPlayer.back_player.Entity.Player;
import com.KfaPlayer.back_player.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerController {


    @Autowired
    PlayerRepository playerRepository;


    @GetMapping("/hello")
    public String hello()
    {
        return "hello";
    }


    @GetMapping("/getplayer")
    public List<Player> getPlayer()
    {
        return (List<Player>) playerRepository.findAll();
    }



}
