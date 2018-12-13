import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Url: '',
      open: false};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ open: !this.state.open })
    console.log(this.state.Title)
  }

  handleChange1(event) {
    this.setState({Title: event.target.value});
  }

  handleChange2(event) {
    this.setState({Url: event.target.value});

  }

  OnSubmit(e){
    e.preventDefault();
    if (this.state.Title != '' && this.state.Url != '' ) {
      this.props.handleSubmit(this.state.Title, this.state.Url)
    }
    this.setState({ open: !this.state.open });
  }

  render () {
    return (<div id="new-flux">
      { !this.state.open && <div className="btn btn-success haut-droit" onClick={this.handleClick}>Ajouter un Flux</div>}
      { this.state.open &&
        <form>
          <p>Title</p>
          <input type="text" className="form-control" value={this.state.Title} onChange={this.handleChange1}/>
          <p>Url</p>
          <input type="text" className="form-control" value={this.state.Url} onChange={this.handleChange2}/>
          <button className="btn btn-success" onClick={e => this.OnSubmit(e)}>Create</button>
        </form>
      }
      </div>
    );
  }
}

export default Form;

