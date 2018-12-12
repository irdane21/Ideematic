import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'



class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.article,
      lu: this.props.article.Lu,
      date: new Date(this.props.article.Publication)
     };

    this.markasread = this.markasread.bind(this);
    this.markasunread = this.markasunread.bind(this);
  }

  markasread(){
    const url = 'fluxes/' + this.props.article.flux_id + '/articles/read?id=' + this.props.article.id
    axios({
      method: 'get',
      url: url,
    })
    this.setState({lu: true})
  }

  markasunread(){
    const url = 'fluxes/' + this.props.article.flux_id + '/articles/unread?id=' + this.props.article.id
    axios({
      method: 'get',
      url: url,
    })
    this.setState({lu: false})
  }

  componentDidMount(){
    console.log("article", this.props.article)
  }

  render () {
    return (
      <li key={this.props.article.id}>
        <div className="content">
          <a href={this.props.article.Url} target="blank" onClick={this.markasread}><p className="reducemargin">{this.props.article.Title}</p></a>
          <p>Publiée le: {this.state.date.toLocaleDateString()}</p>
          <p>{this.props.article.Description} </p>
          { this.state.lu && <a href="" onClick={this.markasunread}>Cet article est marqué comme Lu</a>}
          { !this.state.lu && <a href="" onClick={this.markasread}>Cet article est marqué comme non Lu</a>}
        </div>
      </li>);
  }
}

export default Article;
