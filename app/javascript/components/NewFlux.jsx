import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'

class NewFlux extends React.Component {
  render () {
    return (<div id="new-flux">
        <a href="/fluxes/new" data-remote="true">New Flux</a>
      </div>);
  }
}

export default NewFlux;

