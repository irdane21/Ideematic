import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Article from './Article'
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

  getArticles(){
    const url = "/fluxes/" + this.props.id + "/articles"
    const request = axios.get(url).then((response)=>{
      console.log('getArticles',response.data);
      this.setState({articles: response.data})
    })
  }

  checkArticles() {
    console.log("endtimer")
    const url = "/fluxes/" + this.props.id + "/articles/new"
    axios({
      method: 'post',
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')},
      url: url,
    }).then((response) => {
      if (response.data != 0) {
        console.log('response from new',response.data)
        this.setState({articles: response.data})
      }
    });
  }


  componentWillMount(){
    console.log("péage1.5", this.props.id)
    this.getArticles();
    this.timerID = setInterval(
      () => this.checkArticles(),
      120000
    );
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



