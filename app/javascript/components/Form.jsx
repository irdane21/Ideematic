import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: '', value2: '', open: false};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ open: !this.state.open })
  }

  handleChange1(event) {
    this.setState({value1: event.target.value});
  }

  handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  handleSubmit(event){
    let message = event.target.value
    axios.post('/fluxes/create', `Title=${Title}`, `Url=${Url}`)
    this.state({ open: false})
  }
  render () {
    return (<div id="new-flux">
      { !this.state.open && <div className="btn btn-success" onClick={this.handleClick}>New Flux</div>}
      { this.state.open &&
        <form onSubmit={this.handleSubmit}>
          <p>Title</p>
          <input type="text" className="form-control" value={this.state.value1} onChange={this.handleChange1}/>
          <p>Url</p>
          <input type="text" className="form-control" value={this.state.value2} onChange={this.handleChange2}/>
          <button className="btn btn-success" type="submit">Create</button>
        </form>
      }
      </div>
    );
  }
}

export default Form;

