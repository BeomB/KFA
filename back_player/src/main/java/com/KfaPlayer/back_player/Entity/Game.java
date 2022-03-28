package com.KfaPlayer.back_player.Entity;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
public class Game {


    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String homeTeamName;

    @Column
    private String awayTeamName;

    @Column
    private int homeTeamScore;

    @Column
    private int awayTeamScore;

    @Column
    private int homeTeamShare;

    @Column
    private int awayTeamShare;


    public Game()
    {
    }
    public Game(Long id, String homeTeamName, String awayTeamName, int homeTeamScore, int awayTeamScore, int homeTeamShare, int awayTeamShare) {
        this.id = id;
        this.homeTeamName = homeTeamName;
        this.awayTeamName = awayTeamName;
        this.homeTeamScore = homeTeamScore;
        this.awayTeamScore = awayTeamScore;
        this.homeTeamShare = homeTeamShare;
        this.awayTeamShare = awayTeamShare;
    }
}
