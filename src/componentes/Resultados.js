import React, { Component } from 'react';
import Productos from './Productos';
import Detalles from './Detalles';

class Resultados extends Component {
    mostrarProductos = () => {
        const productos = this.props.resultado;
        if (productos.length === 0) return null;
        return (
            <React.Fragment>
                {productos.map(producto => (
                    <Productos
                        key={producto.id}
                        producto={producto}
                        detalleProductos={this.props.detalleProductos}
                    />
                ))}
            </React.Fragment>
        );
    }

    mostrarDetalles = () => {
        const detallesproducto = this.props.resultado;
        return (
            <React.Fragment>
                {detallesproducto.map(data => (
                    <Detalles
                        key={data.id}
                        detalle={data}
                    />
                ))}
            </React.Fragment>
        );
    }

    render() {
        if (this.props.page === "productos") {
            return (
                <React.Fragment>
                    {this.mostrarProductos()}
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    {this.mostrarDetalles()}
                </React.Fragment>
            );
        }

    }
}

export default Resultados;