import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'

function DisplayArticles(props) {
  return (
    <li id="<%= article.id %>">
      <div className="content">
        <p>{props.Title}  </p>
        <p>{props.Description} </p>
        <a href="{props.Url}" target="_blank" data="<%= article.id %>">Voir l'article <i class="fas fa-arrow-right"></i></a>
        <div id="switchlu" class="display">
        </div>
      </div>
    </li>
  );
}
class Articles extends React.Component {
  // constructor(props){
  //   super();
  //   this.state = props.fluxes
  // }
  render () {
    const fluxes = this.props.fluxes
    const listflux = fluxes.map((flux)=> DisplayFlux(flux))
    return (<div className="row margin-top" id="fluxes">
      {listflux}
    </div>);
  }
}

export default Fluxes;
