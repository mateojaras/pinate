package co.com.pinate.mongo;


import co.com.pinate.model.producto.Producto;
import co.com.pinate.model.producto.gateways.ProductoRepository;
import co.com.pinate.mongo.helper.AdapterOperations;
import co.com.pinate.mongo.producto.ProductoDB;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public class MongoRepositoryAdapter extends AdapterOperations<Producto, ProductoDB, String, MongoDBRepository>
 implements ProductoRepository
{

    public MongoRepositoryAdapter(MongoDBRepository repository, ObjectMapper mapper) {

        super(repository, mapper, d -> mapper.map(d, Producto.class));
    }

    @Override
    public Mono<Producto> create(Producto producto) {
        ProductoDB productoDB = ProductoDB.builder()
                .nombre(producto.getNombre())
                .cantidad(producto.getCantidad())
                .descripcion(producto.getDescripcion())
                .foto(producto.getFoto())
                .visual(producto.isVisual())
                .precio(producto.getPrecio())
                .categoria(producto.getCategoria())
                .build();

        return repository.save(productoDB).map(this::toEntity);
    }

    @Override
    public Flux<Producto> findBycategoria(String categoria) {
        return repository.findBycategoria(categoria);
    }
}
