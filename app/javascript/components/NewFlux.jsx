import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Form from './Form'

class NewFlux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClick(e){
    let message = e.target
    axios.get('/fluxes/new').then((response)=> {console.log(response)})

  }
  render () {
    return (<div id="new-flux" onClick={this.handleClick}>
        New Flux
      </div>);
  }
}

export default NewFlux;



