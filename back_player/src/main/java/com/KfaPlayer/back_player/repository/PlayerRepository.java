package com.KfaPlayer.back_player.repository;

import com.KfaPlayer.back_player.Entity.Player;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlayerRepository extends CrudRepository<Player, Long> {


    List<Player> findByPosition(String position);


    @Query(value = "select name from kfa_player where goal = (select max(goal) from kfa_player)",nativeQuery = true)
    public String selecttopgoal();

    @Query(value = "select name from kfa_player where assist = (select max(assist) from kfa_player)",nativeQuery = true)
    public String selecttopassist();

}
