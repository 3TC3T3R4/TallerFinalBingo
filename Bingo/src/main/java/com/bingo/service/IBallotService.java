package com.bingo.service;

import com.bingo.domain.Ballot;

import java.util.List;
import java.util.Optional;


public interface IBallotService {


    /**
     * listar las  balotas en una lista
     *
     * @return lista de Objetos de tipo balota
     *
     */
    public List<Ballot> list();

    /**
     * Almacenar o guardar las balotas
     *
     * @param //balota Objeto del balota a guardar
     * @return Objeto del balota guardado
     *
     */
    public Ballot save(Ballot ballot);

    /**
     * Actualiza una tupla completa de una balota
     *
     * @param id Identificador de la balota  a actualizar
     * @param //balota Objeto de balota a actualizar
     * @return Objeto de balota actualizada
     *
     */
    public Ballot update(Long id,Ballot ballot);


    /**
     * Elimina una tupla completa de una balota
     *
     * @param //balota Objeto de balota a eliminar
     * @return Objeto de balota eliminado
     *
     */
    public void  delete(Ballot ballot);


    public Optional<Ballot> findUser(Ballot ballot);




}
