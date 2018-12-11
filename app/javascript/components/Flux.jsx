import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'


function DisplayArticles(props) {
  console.log("péage3", props)
  const listarticles = articles.map((article)=>{
    return (<ul className="card-overflow" key={article.id}>
      <Article article={article}/>
      </ul>
    );
  });
  return (
    <ul className="card-overflow" key={article.id}>
      {listarticles}
    </ul>
  );
}

class Flux extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  getthearticles(){
    const url = "/articles?id=" + props.id
    axios.get(url).then((response)=>{
      this.setState({articles: response.data})
    })
    console.log("péage2", this.state.articles)
  }


  render () {
    return (
      <DisplayArticles articles={this.getthearticles()}/>
    );
  }
}

export default Flux;



