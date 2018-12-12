import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Article from './Article'
import Timer from './Timer'
//import { Pagination } from 'semantic-ui-react'


function DisplayArticles(props) {
  console.log("péage3", props.articles)
  const listarticles = props.articles.map((article)=>{
    return (
      <Article article={article}/>
    );
  });
  return (
    <div>{listarticles}</div>
  );
}

class Flux extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: []};
    this.setState = this.setState.bind(this);
  }

  componentWillMount(){
    console.log("péage1.5", this.props.id)
    const url = "/articles?id=" + this.props.id
    const request = axios.get(url).then((response)=>{
      console.log('response',response);
      this.setState({articles: response.data})
    })
  }

  render () {
    return ( <div>
      <Timer id={this.props.id}/>
      <DisplayArticles articles={this.state.articles}/>
      </div>
    );
  }
}

export default Flux;



