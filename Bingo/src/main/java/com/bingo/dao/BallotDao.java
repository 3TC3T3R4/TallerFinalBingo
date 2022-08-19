package com.bingo.dao;

import com.bingo.domain.Ballot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface BallotDao extends JpaRepository<Ballot,Long> {




}
