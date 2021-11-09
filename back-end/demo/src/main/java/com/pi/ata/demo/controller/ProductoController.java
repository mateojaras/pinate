package com.pi.ata.demo.controller;

import com.pi.ata.demo.document.Producto;
import com.pi.ata.demo.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000" )
@RestController
@RequestMapping("/api")
public class ProductoController {

    @Autowired
    ProductoRepository productoRepository;

    @PostMapping("/producto")
    public Producto CrearProducto(@RequestBody Producto producto){
        return  productoRepository.save(producto);
    }

    @GetMapping("/productos")
    public List<Producto> ListarProductos(){
        return productoRepository.findAll();
    }

    @GetMapping("/categoria/{categoria}")
    public List<Producto> ListarPorNombre(@PathVariable("categoria") String categoria){
        return productoRepository.findBycategoria(categoria);
    }
}
