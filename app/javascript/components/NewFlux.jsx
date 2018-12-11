import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Form from './Form'

class NewFlux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ open: !this.state.open })
  }

  render () {
    return (<div id="new-flux">
      { !this.state.open && <div className="btn btn-success" onClick={this.handleClick}>New Flux</div>}
      { this.state.open && <Form/>}

      </div>);
  }
}

export default NewFlux;



