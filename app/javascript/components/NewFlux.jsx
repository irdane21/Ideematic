import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'

class NewFlux extends React.Component {
  // handlesubmit(e){
  //   let message = e.arget.element[0].value
  //   axios.post('/fluxes/new')

  // }
  render () {
    return (<div id="new-flux">
        <a href="/fluxes/new" data-remote="true">New Flux</a>
      </div>);
  }
}

export default NewFlux;


