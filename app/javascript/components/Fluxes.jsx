import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Article from './Article'

function DisplayFlux(props) {
  console.log("display", props.fluxes[0])
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
  axios.get('/articles/{props.id}').then((response)=> {console.log(response)
    return (
      <DisplayArticles articles={response}/>
      );
  })
}

function DisplayArticles(props) {
  console.log("bite", props.response)
    const listarticles = props.response.map((article)=>{
      return (
        <div>bite</div>
      );
    }
  return (
    <ul className="card-overflow" key={article.id}>
      {listarticles}
    </ul>
  );
}

class Fluxes extends React.Component {
  render () {
    console.log(this.props.fluxes)
    return (
      <DisplayFlux fluxes={this.props.fluxes}/>
    );
  }
}

export default Fluxes;
