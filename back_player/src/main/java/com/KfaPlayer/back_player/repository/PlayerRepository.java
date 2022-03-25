package com.KfaPlayer.back_player.repository;

import com.KfaPlayer.back_player.Entity.Player;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlayerRepository extends CrudRepository<Player, Long> {


    List<Player> findByPosition(String position);

}
