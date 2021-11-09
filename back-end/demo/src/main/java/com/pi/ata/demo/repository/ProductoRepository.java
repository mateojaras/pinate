package com.pi.ata.demo.repository;

import com.pi.ata.demo.document.Producto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends MongoRepository<Producto,String> {


    public List<Producto> findBycategoria(String categoria);
}
