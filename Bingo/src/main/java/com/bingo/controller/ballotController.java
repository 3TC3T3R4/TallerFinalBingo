package com.bingo.controller;

import com.bingo.domain.Ballot;
import com.bingo.service.BallotService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * Controlador para la balota
 *
 * @version 1.0.0 2022-08-18
 * @author Estevan Tangarife Correa <teban_1928@hotmail.com>
 * @since 1.0.0
 */
@Slf4j // para imprimir y se vea mejor
@CrossOrigin
@RestController//esta clase es un controlador se le dice a springboot

public class ballotController {

    /**
     * Servicio para el manejo de la balota
     */
    @Autowired // donde llega el servicio "inyeccion de dependencia"
    private BallotService ballotService;

    /**
     * Dirección raíz del sistema, este redirige  balotas
     *
     * @return Lista de objetos de tipo de clase balota
     */
    @GetMapping(path = "/balotas")
    public List<Ballot> listado(){

        return ballotService.list();


    }

    /**
     * Crea una nueva balota
     *
     * @param //balota Objeto balota a crear
     * @return Objeto en formato json
     */
    @PostMapping(path = "/balota")
    public ResponseEntity<Ballot> crear(Ballot ballot){

        log.info("balota creada: {}",ballot);

        ballotService.save(ballot);
        return new ResponseEntity<>(ballot, HttpStatus.CREATED);

    }



}
