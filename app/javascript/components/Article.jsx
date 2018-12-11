import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'


class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lu: this.props.Lu };

    this.markasread = this.markasread.bind(this);
  }

  markasread(){
    this.setState({lu: 1})
  }

  render () {
    console.log("péage 4", this.props.article)
    return (
      <li key={this.props.article.id}>
        <div className="content">
          <p>{this.props.article.Title}  </p>
          <p>{this.props.article.Description} </p>
          <a href={this.props.article.Url} target="blank" OnClick={()=> this.markasread}> Voir l'article</a>
          { this.state.lu && <p></p>}
        </div>
      </li>);
  }
}

export default Article;
