package com.bingo.service;

import com.bingo.domain.Game;
import java.util.List;
import java.util.Optional;


public interface IGameService {


    /**
     * listar los juegos en una lista
     *
     * @return lista de Objetos de tipo juego
     *
     */
    public List<Game> list();

    /**
     * Almacenar o guardar los juegos
     *
     * @param //juego Objeto de juego a guardar
     * @return Objeto de juego guardado
     *
     */
    public Game save(Game game);

    /**
     * Actualiza una tupla completa de un juego
     * @param id Identificador del juego a actualizar
     * @param// Objeto de juego  a actualizar
     * @return Objeto de juego actualizado
     *
     */
    public Game update(Long id,Game game);


    /**
     * Elimina una tupla completa de un juego
     *
     * @param //Objeto de juego a eliminar
     * @return Objeto de juego eliminado
     *
     */
    public void  delete(Game game);


    public Optional<Game> findUser(Game game);




}
