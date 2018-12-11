import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(evet){
    let message = event.target.value
    axios.post('/fluxes/create', `Title=${Title}`, `Url=${Url}`)

  }
  render () {
    return (<div>
        <form onSubmit={this.handleSubmit}>
          <p>Title</p>
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
          <p>Url</p>
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
          <button className="btn btn-success" type="submit" remote="true">Create</button>
        </form>
      </div>);
  }
}

export default Form;

