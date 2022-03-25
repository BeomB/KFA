package com.KfaPlayer.back_player.Entity;


import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "KfaPlayer")
public class Player {

    @Id
    private Long number;

    @Column
    private String name;
    @Column
    private String team;
    @Column
    private String position;
    @Column
    private int goal;
    @Column
    private int assist;


    public Player() {
    }

    public Player(Long number, String name, String team, int goal, int assist) {
        this.number = number;
        this.name = name;
        this.team = team;
        this.goal = goal;
        this.assist = assist;
    }





}
