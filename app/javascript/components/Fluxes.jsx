import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import Form from './Form'

class Fluxes extends React.Component {
  constructor(props){
    super();
    this.state = props.fluxes
  }
  render () {
    return (<div >
      I'm here {this.props.fluxes[0].Title}
    </div>);
  }
}

export default Fluxes;
