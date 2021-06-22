import React from 'react';

const Productos = (props) => {
    // console.log(props);
    return (
        <div className="row g-0 border-button  overflow-hidden flex-md-row mb-0 bg-white  position-relative" onClick={() => props.detalleProductos(props.producto.title)}>
            <div className="">
                <img src={props.producto.thumbnail} className="img-products" alt={props.producto.title} />
            </div>
            <div className="col d-flex flex-column position-static">
                <h3 className="font-size24">$ {props.producto.price}</h3>
                <p className="font-size18"> {props.producto.title} </p>
            </div>
            <div className="col-auto font-size12 d-lg-block p-5">
                {props.producto.address.state_name}
            </div>
        </div>
    );
}

export default Productos;