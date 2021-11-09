package co.com.pinate.model.producto.gateways;

import co.com.pinate.model.producto.Producto;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProductoRepository {

    Flux<Producto> findAll();
    Mono<Producto> create(Producto producto);
    Flux<Producto> findBycategoria(String categoria);
}
