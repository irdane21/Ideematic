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
    axios({
      method: 'get',
      url: '/articles/read',
    }).then((response)=>{ })
  }

  markasunread(){
    axios({
      method: 'get',
      url: '/articles/unread',
    });
  }

  render () {
    return (
      <li key={this.props.article.id}>
        <div className="content">
          <p>{this.props.article.Title}  </p>
          <p>{this.props.article.Description} </p>
          <a href={this.props.article.Url} target="blank" OnClick={()=> this.markasread}> Voir l'article</a>
          { this.state.lu && <p OnClick={()=> this.markasunread}>Cet article est marqué comme Lu</p>}
          { !this.state.lu && <p OnClick={()=> this.markasread}>Cet article est marqué comme non Lu</p>}
        </div>
      </li>);
  }
}

export default Article;
