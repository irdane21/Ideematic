import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Article from './Article'
import Flux from './Flux'

function DisplayFlux(props) {
  console.log("péage1", props)
    const listflux = props.fluxes.map((flux)=>{
      return (
        <div className="col col-md-6" key={flux.id}>
          <div className="Header">
            <h2>{flux.Title}</h2>
          </div>
          <ul>
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
