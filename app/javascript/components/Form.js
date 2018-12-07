import React from "react"
import PropTypes from "prop-types"

class Form extends React.Component {
  render () {
    return (<div>
        <%= simple_form_for @flux, remote: true do |f| %>
          <%= f.input :Title %>
          <%= f.input :Url %>
          <%= f.button :submit %>
        <% end %>
      </div>);
  }
}

export default Form;

