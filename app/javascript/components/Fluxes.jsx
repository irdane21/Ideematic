import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import Form from './Form'
import Articles from './Articles'

function DisplayFlux(props) {
  return (
    <div className="col col-md-6">
      <div className="Header">
        <h2>{props.Title}</h2>
      </div>
      <ul>
        <Articles/>
      </ul>
    </div>
  );
}
class Fluxes extends React.Component {
  // constructor(props){
  //   super();
  //   this.state = props.fluxes
  // }
  render () {
    const fluxes = this.props.fluxes
    const listflux = fluxes.map((flux)=> DisplayFlux(flux))
    return (<div className="row margin-top" id="fluxes">
      {listflux}
    </div>);
  }
}

export default Fluxes;
