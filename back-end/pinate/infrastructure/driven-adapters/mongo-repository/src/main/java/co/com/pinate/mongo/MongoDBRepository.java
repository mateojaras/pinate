package co.com.pinate.mongo;


import co.com.pinate.model.producto.Producto;
import co.com.pinate.mongo.producto.ProductoDB;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;
import reactor.core.publisher.Flux;


public interface MongoDBRepository extends ReactiveMongoRepository<ProductoDB, String>, ReactiveQueryByExampleExecutor<ProductoDB> {

    public Flux<Producto> findBycategoria(String categoria);
}
