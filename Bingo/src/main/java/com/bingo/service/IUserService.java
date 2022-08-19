package com.bingo.service;

import com.bingo.domain.User;

import java.util.List;
import java.util.Optional;


public interface IUserService {


    /**
     * listar los usuarios en una lista
     *
     * @return lista de Objetos de tipo User
     *
     */
    public List<User> list();

    /**
     * Almacenar o guardar los usuarios
     *
     * @param //objeto de usuario a guardar
     * @return Objeto de usuario guardado
     *
     */
    public User save(User user);

    /**
     * Actualiza una tupla completa de un usuario
     *
     * @param //id Identificador del usuario a actualizar
     * @param// Objeto de usuario a actualizar
     * @return Objeto de usuario actualizado
     *
     */


    public Optional<User> findUser(User user);



}
