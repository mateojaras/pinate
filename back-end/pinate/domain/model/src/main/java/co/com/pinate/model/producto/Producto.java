package co.com.pinate.model.producto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Producto {

    private String id;
    private String nombre;
    private String foto;
    private double precio;
    private int cantidad;
    private String descripcion;
    private String categoria;
    private boolean visual;
}
