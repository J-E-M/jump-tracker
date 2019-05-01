import React from "react";
import { Button, FormGroup } from "reactstrap";
import "./Register.css";
import { register } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";

const InInput = styled.input`
  width: 20%;
  height: 40px;
  background: lightblue;
  opacity: 0.5;
  text-align: center;
  @media (max-width: 968px) {
    width: 50%;
  }
  @media (max-width: 668px) {
    width: 200px;
  }
`;

const FormRegister = styled.form`
  margin: 3% 0 0 3%;
  text-align: center;
`;

const TButton = styled.button`
  width: 20%;
  height: 40px;
  color: lightblue;
`;

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      height: undefined || 0,
      jumpHeight: undefined || 0
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  isValid = () => {
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.height <= 0 ||
      this.state.jumpHeight <= 0
    ) {
      return false;
    }
    return true;
  };

  register = e => {
    e.preventDefault();
    let stateObj = this.state;
    stateObj.height = parseInt(this.state.height, 10);
    stateObj.jumpHeight = parseInt(this.state.jumpHeight, 10);
    this.props.register(stateObj).then(() => {
      this.props.history.push("/login");
    });
  };

  // logOut = () => {
  //   localStorage.removeItem("token");
  // };

  render() {
    const { username, password, height, jumpHeight } = this.state;
    const { handleChange } = this;
    return (
      <div>
        <FormRegister onSubmit={this.register}>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              value={username}
              name="username"
              onChange={handleChange}
              placeholder="enter your email"
            />
          </FormGroup>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="enter your password"
            />
          </FormGroup>
          <FormGroup>
            <InInput
              size="lg"
              type="number"
              value={height}
              name="height"
              onChange={handleChange}
              placeholder="enter your height"
            />
          </FormGroup>
          <FormGroup>
            <InInput
              size="lg"
              type="number"
              value={jumpHeight}
              name="jumpHeight"
              onChange={handleChange}
              placeholder="enter your jump-height"
            />
          </FormGroup>
          <TButton disabled={!this.isValid()} size="lg" color="secondary">
            Submit
          </TButton>
        </FormRegister>
      </div>
    );
  }
}

const mapStateToProps = ({ signingUp, error }) => ({
  error,
  signingUp
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
