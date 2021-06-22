import React from 'react';

const Detalles = (props) => {
    return (
        <div className="row g-0 border  overflow-hidden flex-md-row mb-0 bg-white h-md-250 position-relative">
            <div className="col-auto d-lg-block">
                <img src={props.detalle.thumbnail} className="img img-products-detalle" alt={props.detalle.title} />
            </div>
            <div className="col d-flex flex-column position-static">
                <p className="font-sized14"> Nuevo - 234 vendidos </p>
                <h3 className="font-sized24">{props.detalle.title}</h3>
                <p className="font-sized46">$ {props.detalle.price}  </p>
                <input type="button" className="btn btn-lg btn-primary margin-rightd" value="Comprar" />
            </div>
            <div className="col-auto padding-32">
                <h3 className="font-size28">Descripción del producto </h3>
                <p className="font-size16 descrip"> {props.detalle.title} </p>
            </div>
        </div>
    );
}

export default Detalles;