package com.bingo.service;

import com.bingo.dao.BallotDao;
import com.bingo.domain.Ballot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class BallotService implements IBallotService {

    /**
     * Sirve para inyectar el usuario DAO
     */
    @Autowired
    private BallotDao ballotDao;




    @Override
    @Transactional(readOnly = true)
    public List<Ballot> list() {

        return  (List<Ballot>) ballotDao.findAll();

    }

    @Override
    @Transactional
    public Ballot save(Ballot ballot) {
        return ballotDao.save(ballot);
    }


    @Override
    @Transactional
    public Ballot update(Long id, Ballot ballot) {
        ballot.setId(id);
            return ballotDao.save(ballot);
    }

    @Override
    @Transactional
    public void delete(Ballot ballot) {

        ballotDao.delete(ballot);


    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Ballot> findUser(Ballot ballot) {

        return  ballotDao.findById(ballot.getId());
    }
}
