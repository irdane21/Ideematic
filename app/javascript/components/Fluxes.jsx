import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Article from './Article'

function DisplayFlux(props) {
  console.log("péage1", props)
    const listflux = props.fluxes.map((flux)=>{
      return (
        <div className="col col-md-6" key={flux.id}>
          <div className="Header">
            <h2>{flux.Title}</h2>
          </div>
          <ul>
            <DefineArticles id={flux.id}/>
          </ul>
        </div>)
      }
    )
  return (
    <div className="row margin-top" id="fluxes">
      {listflux}
    </div>
  );
}

function DefineArticles(props) {
  const url = "/articles?id=" + props.id
  axios.get(url).then((response)=> {
    console.log("péage 2", response.data)
    render(){
      return (
        <DisplayArticles articles={response.data}/>
        )
      })
    }
};

function DisplayArticles(props) {
  console.log("péage 3", props)
  const listarticles = props.articles.map((article)=>{
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
class Fluxes extends React.Component {
  render () {
    return (
      <DisplayFlux fluxes={this.props.fluxes}/>
    );
  }
}

export default Fluxes;
