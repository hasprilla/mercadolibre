import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Cabecera from './componentes/Cabecera';
import Resultados from './componentes/Resultados';
import './App.css';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      pbusqueda: '',
      resultado: [],
      page: ''
    }
  }

  componentDidMount() {
    this.obtenerProductos();
  }

  obtenerProductos = () => {
    var url = '';
    if (this.state.pbusqueda === '') {
      url = `https://api.mercadolibre.com/sites/MLA/search?q=​:query`;
    } else {
      url = `https://api.mercadolibre.com/sites/MLA/search?q='${this.state.pbusqueda}'&limit=4`;
    }
    fetch(url).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => { this.setState({ page: "productos", resultado: response.results }); });
  }

  detalleProductos = (e) => {
    if (this.state.pbusqueda !== '') {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q='${e}'&limit=1`;
      fetch(url).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => { this.setState({ page: "detalle", resultado: response.results }); });
    }
  }

  datosBusqueda = (pbusqueda) => {
    this.setState({
      pbusqueda
    }, () => {
      this.obtenerProductos();
    });
  }


  render() {
    return (
      <div className="app">
        <Cabecera
          datosBusqueda={this.datosBusqueda}
        />
        <div className="container">
          <div className="px-5">
            <div className="row mb-5 border-radius">
              <div className="col-md-12 datos">
                <div className="barranav p-0">Electrónica, Audio y Video &gt; iPod &gt; Reproductores &gt; iPod touch &gt; 32GB</div>
                <Resultados
                  resultado={this.state.resultado}
                  detalle={this.state.resultado}
                  page={this.state.page}
                  detalleProductos={this.detalleProductos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
