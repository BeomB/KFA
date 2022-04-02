package com.KfaPlayer.back_player.controller;


import com.KfaPlayer.back_player.Entity.Player;
import com.KfaPlayer.back_player.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
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

    @GetMapping("/getposition/{position}")
    public List<Player> getPosition(@PathVariable String position)
    {
        return playerRepository.findByPosition(position);
    }


    @GetMapping("/topgoal")
    public String topGoal()
    {
        return playerRepository.selecttopgoal();
    }


    @GetMapping("/topassist")
    public String topassist()
    {
        return playerRepository.selecttopassist();
    }


    @PutMapping("/score/{number}")
    public Player Score(@PathVariable Long number)
    {
        Optional<Player> player = playerRepository.findById(number);
        Player score_player = new Player();
        score_player.setNumber(player.get().getNumber());
        score_player.setPhoto(player.get().getPhoto());
        score_player.setName(player.get().getName());
        score_player.setGoal(player.get().getGoal()+1);
        score_player.setAssist(player.get().getAssist());
        score_player.setTeam(player.get().getTeam());
        score_player.setPosition(player.get().getPosition());
        playerRepository.save(score_player);
        return score_player;
    }

    @PutMapping("/score_cancel/{number}")
    public Player ScoreCancel(@PathVariable Long number)
    {
        Optional<Player> player = playerRepository.findById(number);
        Player score_player = new Player();
        score_player.setNumber(player.get().getNumber());
        score_player.setPhoto(player.get().getPhoto());
        score_player.setName(player.get().getName());
        score_player.setGoal(player.get().getGoal()-1);
        score_player.setAssist(player.get().getAssist());
        score_player.setTeam(player.get().getTeam());
        score_player.setPosition(player.get().getPosition());
        playerRepository.save(score_player);
        return score_player;
    }

    @PutMapping("/assist_cancel/{number}")
    public Player assistCancel(@PathVariable Long number)
    {
        Optional<Player> player = playerRepository.findById(number);
        Player score_player = new Player();
        score_player.setNumber(player.get().getNumber());
        score_player.setPhoto(player.get().getPhoto());
        score_player.setName(player.get().getName());
        score_player.setGoal(player.get().getGoal());
        score_player.setAssist(player.get().getAssist()-1);
        score_player.setTeam(player.get().getTeam());
        score_player.setPosition(player.get().getPosition());
        playerRepository.save(score_player);
        return score_player;
    }

    @PutMapping("/assist/{number}")
    public Player assist(@PathVariable Long number)
    {
        Optional<Player> player = playerRepository.findById(number);
        Player score_player = new Player();
        score_player.setNumber(player.get().getNumber());
        score_player.setPhoto(player.get().getPhoto());
        score_player.setName(player.get().getName());
        score_player.setGoal(player.get().getGoal());
        score_player.setAssist(player.get().getAssist()+1);
        score_player.setTeam(player.get().getTeam());
        score_player.setPosition(player.get().getPosition());
        playerRepository.save(score_player);
        return score_player;
    }



}
