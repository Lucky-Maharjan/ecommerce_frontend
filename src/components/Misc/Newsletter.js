import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import axios from "axios";
import { API_PATH } from "../../backend_url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();
    await axios
      .post(`${API_PATH}subscribers/`, { email: this.state.email })
      .then(res => alert("Successfully subscribed!"))
      .catch(err =>
        alert(`The email ${this.state.email} is already a subscriber!`)
      );
    this.setState({ email: "" }); // clear input after submission
  };

  render() {
    return (
      <React.Fragment>
        <h5 className="font-weight-bold">Subscribe to our newsletter!</h5>
        <form
          className="form-inline justify-content-center"
          onSubmit={this.handleSubmit}
        >
          <InputGroup>
            <Input
              type="email"
              placeholder="Your email address"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <InputGroupAddon addonType="append">
              <Button className="btn btn-secondary">
                Subscribe! <FontAwesomeIcon icon="paper-plane" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </React.Fragment>
    );
  }
}
