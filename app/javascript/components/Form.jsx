import React from "react"
import PropTypes from "prop-types"

class Form extends React.Component {
  render () {
    return (<div>
        bite{this.props.flux}
      </div>);
  }
}

export default Form;

