import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Article from './Article'




class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: []};
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    console.log("starttimer")
    this.timerID = setInterval(
      () => this.tick(),
      20000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log("endtimer")
    const url = "/articles/new?id=" + this.props.id
    const request = axios.get(url).then((response)=>{
      console.log('response',response);
      if (response == 0) {
        return( <div></div>
        )
      } else {
        this.setState({article: response.data})
        return(
          <Article article={article}/>
        )
      }
    })
  }

  render(){
    return (
      <div></div>
    )
  }
}

export default Timer;
