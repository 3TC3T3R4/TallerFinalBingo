package com.bingo.controller;

import com.bingo.domain.Game;
import com.bingo.service.GameService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * Controlador para los juegos
 *
 * @version 1.0.0 2022-08-18
 * @author Estevan Tangarife Correa <teban_1928@hotmail.com>
 * @since 1.0.0
 */
@Slf4j // para imprimir y se vea mejor
@CrossOrigin
@RestController//esta clase es un controlador se le dice a springboot

public class gameController {

    /**
     * Servicio para el manejo de juegos
     */
    @Autowired // donde llega el servicio "inyeccion de dependencia"
    private GameService gameService;

    /**
     * Dirección raíz del sistema, este redirige  /games
     *
     * @return Lista de objetos de tipo de clase game
     */
    @GetMapping(path = "/games")
    public List<Game> listado(){

        return gameService.list();


    }

    /**
     * Crea un nuevo juego
     *
     * @param //juego Objeto juego a crear
     * @return Objeto en formato json
     */
    @PostMapping(path = "/game")
    public ResponseEntity<Game> crear(Game game){

        log.info("game creado: {}",game);

        gameService.save(game);
        return new ResponseEntity<>(game, HttpStatus.CREATED);

    }



}
