import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Article from './Article'
//import { Pagination } from 'semantic-ui-react'


function DisplayArticles(props) {
  const listarticles = props.articles.map((article)=>{
    return (
      <Article article={article}/>
    );
  });
  return (
    <div key={props.id}>{listarticles}</div>
  );
}

class Flux extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: []};
    this.setState = this.setState.bind(this);
  }

  getArticles(){
    const url = "/fluxes/" + this.props.id + "/articles"
    const request = axios.get(url).then((response)=>{
      if (this.mounted) {
        this.setState({articles: response.data})
      }
    })
  }

  checkArticles() {
    const url = "/fluxes/" + this.props.id + "/articles/new"
    axios({
      method: 'post',
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
      url: url,
    }).then((response) => {
      if (response.data != 0) {
        this.setState({articles: response.data})
      }
    });
  }


  componentDidMount(){
    this.mounted = true;
    if (this.mounted) {
      this.getArticles();
    }
    this.timerID = setInterval(
      () => this.checkArticles(),
      20000
    );
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render () {
    return (
      <div>
        <DisplayArticles articles={this.state.articles}/>
      </div>
    );
  }
}

export default Flux;



