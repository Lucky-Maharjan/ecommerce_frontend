import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Form, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
    this.setState({ query: "" });
  };

  renderSearchForm = () => {
    return (
      <Form inline onSubmit={this.handleSubmit} style={{ width: "290px" }}>
        <InputGroup>
          <Input
            bsSize="sm"
            type="text"
            placeholder="Search store..."
            label="Search store..."
            value={this.state.query}
            className="border-0"
            onChange={e => this.setState({ query: e.target.value })}
          />
          <InputGroupAddon addonType="append">
            <Button
              outline
              color="secondary"
              size="sm"
              className="bg-white text-dark"
            >
              <FontAwesomeIcon icon="search" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  };

  render() {
    return <React.Fragment>{this.renderSearchForm()}</React.Fragment>;
  }
}

SearchForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(SearchForm);
