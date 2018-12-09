import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'

class Form extends React.Component {
  render () {
    return (<div>
        <form>
          <p>Title</p>
          <input type="text" name="Title" className="form-control" />
          <p>Url</p>
          <input type="text" name="Url" className="form-control" />
          <button className="btn btn-success" type="submit" remote="true">Create</button>
        </form>
      </div>);
  }
}

export default Form;
