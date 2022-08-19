package com.bingo.controller;

import com.bingo.domain.User;
import com.bingo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador para los usuarios
 *
 * @version 1.0.0 2022-08-18
 * @author Estevan Tangarife Correa <teban_1928@hotmail.com>
 * @since 1.0.0
 */
@Slf4j // para imprimir y se vea mejor
@CrossOrigin
@RestController//esta clase es un controlador se le dice a springboot

public class UserController {

    /**
     * Servicio para el manejo de los usuarios
     */
    @Autowired // donde llega el servicio "inyeccion de dependencia"
    private UserService userService;

    /**
     * Dirección raíz del sistema, este redirige  /users
     *
     * @return Lista de objetos de tipo de clase user
     */
    @GetMapping(path = "/users")
    public List<User> listado(){

        return userService.list();


    }

    /**
     * Crea un nuevo usuario
     *
     * @param //usuario Objeto usuario a crear
     * @return Objeto en formato json
     */
    @PostMapping(path = "/user")
    public ResponseEntity<User> crear(User user){

        log.info("user creado: {}",user);

        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);

    }


}
