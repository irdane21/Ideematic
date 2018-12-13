import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Form from "./Form"
import Fluxes from "./Fluxes"

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fluxes: props.fluxes
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(title, url){
    axios({
      method: 'post',
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
      url: '/fluxes',
      data: {Title: title, Url: url}
    }).then((response) => {
      this.setState({fluxes: [response.data, ...this.state.fluxes]})
    });
  }

  render () {
    return (
      <div className="container" id="page">
        <Form handleSubmit={this.handleSubmit} />
        <Fluxes fluxes={this.state.fluxes} />
      </div>
    );
  }
}

export default Page;

