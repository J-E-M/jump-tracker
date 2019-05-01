import React from "react";
import { FormGroup } from "reactstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from "../actions";
import "./Register.css";

const InInput = styled.input`
  width: 20%;
  height: 40px;
  background: lightblue;
  opacity: 0.5;
  text-align: center;
  @media (max-width: 968px) {
    width: 50%;
    text-align: center;
  }
  @media (max-width: 668px) {
    width: 200px;
  }
`;

const IForm = styled.form`
  margin: 5% 0 0 5%;
  text-align: center;
`;

const IButton = styled.button`
  width: 20%;
  height: 40px;
  background: lightblue;
`;

class LogIn extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  isValid = () => {
    if (this.state.username === "" || this.state.password === "") {
      return false;
    }
    return true;
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    const { username, password } = this.state.credentials;
    return (
      <div>
        <IForm onSubmit={this.login} disabled={!this.isValid()}>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              value={username}
              name="username"
              onChange={this.handleChange}
              placeholder="enter your email"
            />
          </FormGroup>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              value={password}
              name="password"
              onChange={this.handleChange}
              placeholder="enter your password"
            />
          </FormGroup>
          <IButton size="lg" color="secondary">
            {" "}
            Log in
          </IButton>
        </IForm>
      </div>
    );
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(LogIn);
