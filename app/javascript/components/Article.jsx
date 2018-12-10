import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'


class Article extends React.Component {
  render () {
    return (
      <li key={this.props.article.id}>
        <div className="content">
          <p>{this.props.article.Title}  </p>
          <p>{this.props.article.Description} </p>
          <p> Voir l'article</p>
          <div id="switchlu" class="display">
          </div>
        </div>
      </li>);
  }
}

export default Article;
