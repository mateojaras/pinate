package co.com.pinate.mongo.producto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Document(collection = "Producto")
public class ProductoDB {

    @Id
    private String id;
    private String nombre;
    private String foto;
    private double precio;
    private int cantidad;
    private String descripcion;
    private String categoria;
    private boolean visual;
}
