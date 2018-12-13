import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Flux from './Flux'

function DisplayFlux(props) {
  const listflux = props.fluxes.map((flux)=>{
    return (
      <div className="col col-md-6" key={flux.id}>
        <div className="Header">
          <h2>{flux.Title}</h2>
        </div>
        <ul className="card-overflow">
          <Flux id={flux.id}/>
        </ul>
      </div>)
    }
  )
  return (
    <div className="row margin-top" id="fluxes">
      {listflux}
    </div>
  );
}

class Fluxes extends React.Component {
  render () {
    return (
      <DisplayFlux fluxes={this.props.fluxes}/>
    );
  }
}
export default Fluxes;
