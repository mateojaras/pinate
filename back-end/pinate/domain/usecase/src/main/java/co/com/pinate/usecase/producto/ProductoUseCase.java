package co.com.pinate.usecase.producto;

import co.com.pinate.model.producto.Producto;
import co.com.pinate.model.producto.gateways.ProductoRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
public class ProductoUseCase {

    private final ProductoRepository productoRepository;

    public Flux<Producto> listarTodos(){
        return  productoRepository.findAll();
    }


    public Mono<Producto> crearProducto(Producto producto){
        return productoRepository.create(producto);
    }

    public Flux<Producto> listarCategoria(String categoria){
        return productoRepository.findBycategoria(categoria);
    }
}
