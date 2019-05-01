import React from "react";
import "./Goals.css";
import { withRouter, Link } from "react-router-dom";
import { Button, FormGroup } from "reactstrap";
import { connect } from "react-redux";
import Graph from "./Graph";
import { getData, post, deleteGoal, completed } from "../actions";
import "./Goals.css";
import styled from "styled-components";

const GoalsMain = styled.div`
  display: flex;
  margin-top: 5%;

  @media (max-width: 968px) {
    // flex-wrap: wrap;
    width: 100%;
  }

  @media (max-width: 668px) {
    flex-direction: column;
  }
`;
const GoalsLower = styled.section`
  width: 30%;
  margin: 0 1% 5% 2%;
  background: rgba(0, 0, 0, 0.811);
  padding: 0;
  font-size: 16px;
  height: auto;
  opacity: 0.8;
  text-align: center;
  border: 2px solid rgb(243, 131, 4);
  border-radius: 25px;
  @media (max-width: 968px) {
    width: 50%;
  }
  @media (max-width: 868px) {
    width: 100%;
  }
`;
const TButton = styled.button`
  margin: 2% 0 0 1%;
  width: 80%;
  font-size: 20px;
  background: red;
  border-radius: 10px;
`;
const GoalsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SpanDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GoalsUpper = styled.div`
  margin-left: 2%;
`;
const InInput = styled.input`
  width: 400px;
  height: 40px;
  margin-top: 2%;
  background: lightblue;
  opacity: 0.4;
  @media (max-width: 968px) {
    width: 100%;
  }
  @media (max-width: 668px) {
    width: 200px;
  }
`;

const ISpan1 = styled.span`
  font-size: 24px;
  padding-left: 10%;
  margin-top: 5%;
  color: red;
`;
const ISpan2 = styled.span`
  font-size: 24px;
  padding-right: 20px;
  margin-top: 5%;
  color: green;
`;

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumpHeight: undefined,
      target: undefined
    };
  }

  // console.log("props", props.goals);
  componentDidMount() {
    this.props.getData();
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: parseInt(e.target.value, 10)
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.post(this.state);
    this.setState({
      jumpHeight: "",
      target: ""
    });
  };

  checked = goal => {
    goal.completed = !goal.completed;
    this.props.completed(goal);
  };

  delete = id => {
    this.props.deleteGoal(id);
  };

  render() {
    return (
      <GoalsMain>
        <GoalsUpper>
          <Graph className="graph" />
          <form onSubmit={this.handleSubmit} className="form">
            <FormGroup>
              <InInput
                type="text"
                value={this.state.jumpHeight}
                name="jumpHeight"
                onChange={this.handleChange}
                placeholder="enter your jump height"
              />
            </FormGroup>
            <FormGroup>
              <InInput
                type="text"
                value={this.state.target}
                name="target"
                onChange={this.handleChange}
                placeholder="enter your target week"
              />
            </FormGroup>
            <Button className="signBtn">Set Goal</Button>
          </form>
        </GoalsUpper>
        <GoalsFlex>
          {this.props.goals &&
            this.props.goals.reverse().map(goal => (
              <GoalsLower key={goal.id}>
                <SpanDiv>
                  <ISpan1 onClick={() => this.delete(goal.id)}>
                    {" "}
                    <i className="fas fa-close" />
                  </ISpan1>
                  <ISpan2 onClick={() => this.checked(goal)}>
                    {" "}
                    <i className="fas fa-check" />
                  </ISpan2>
                </SpanDiv>
                {goal.completed ? (
                  <p style={{ textDecoration: "line-through" }}>
                    {goal.jump_height}
                  </p>
                ) : (
                  <p style={{ textDecoration: "none" }}>{goal.jump_height}</p>
                )}

                {goal.completed ? (
                  <p style={{ textDecoration: "line-through" }}>
                    {goal.target_date}
                  </p>
                ) : (
                  <p style={{ textDecoration: "none" }}>{goal.target_date}</p>
                )}

                <Link
                  to={{
                    pathname: `/exercises/${goal.id}`
                  }}
                >
                  <TButton size="lg" color="primary">
                    Exercises
                  </TButton>
                </Link>
              </GoalsLower>
            ))}
        </GoalsFlex>
      </GoalsMain>
    );
  }
}

const mapStateToProps = ({ goals }) => ({
  goals
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData, post, deleteGoal, completed }
  )(Goals)
);
