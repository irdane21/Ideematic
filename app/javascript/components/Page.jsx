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
    console.log("title", title)
    axios({
      method: 'post',
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
      url: '/fluxes',
      data: {Title: title, Url: url}
    }).then((response) => {
      console.log(response.data)
      this.setState({fluxes: [...this.state.fluxes, response.data]})
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

