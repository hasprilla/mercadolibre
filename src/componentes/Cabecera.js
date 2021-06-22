import React, { Component } from 'react';

class Cabecera extends Component {

  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();
    this.props.datosBusqueda(this.busquedaRef.current.value);
  }
  
  render() {
    return (
      <header className="bg-warning text-white">
        <div className="container header">
          <div className="row">
            <div className="col-12 ">
              <form onSubmit={this.obtenerDatos}>
                <div className="input-group text-right">
                  <div className="ml-3">
                    <img src="./Logo_ML.png" className="logo" alt="" />
                  </div>
                  <input ref={this.busquedaRef} className="form-control marginsearch" name="search" id="search" type="search" placeholder="Nunca dejes de buscar" />
                  <div className="input-group-append marginsearchr">
                    <button type="submit" className="btn btn-primary btn-search ">
                      <i className="fa fa-search text-black"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Cabecera;