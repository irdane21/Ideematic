import React from "react"
import PropTypes from "prop-types"
class Form extends React.Component {
  render () {
    return (
      <React.Fragment>
        json.messages(@messages) do |message|
          json.extract! message, :title, :title
          json.url message_url(message, format: :json)
        end
      </React.Fragment>
    );
  }
}

Form.propTypes = {
  greeting: PropTypes.string
};
export default Form
