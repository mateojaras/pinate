package co.com.pinate.api;
import co.com.pinate.model.producto.Producto;
import co.com.pinate.usecase.producto.ProductoUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000" )
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
    private final ProductoUseCase productoUseCase;


    @GetMapping(path = "/path")
    public String commandName() {
//      return useCase.doAction();
        return "Hello World";
    }
    @GetMapping(path = "/productos")
    public Flux<Producto> ListarProductos(){
        return productoUseCase.listarTodos();
    }


    @PostMapping(path = "/producto")
    public Mono<Producto> CrearProducto(@RequestBody Producto producto){
        return  productoUseCase.crearProducto(producto);
    }


    @GetMapping(path="/categoria/{categoria}")
    public Flux<Producto> ListarPorNombre(@PathVariable("categoria") String categoria){
        return productoUseCase.listarCategoria(categoria);
    }
}
