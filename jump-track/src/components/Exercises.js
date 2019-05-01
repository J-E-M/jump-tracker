import React from "react";
import { Button, FormGroup } from "reactstrap";
import { connect } from "react-redux";
import { exercise, exerciseGet } from "../actions";
import "./Exercises.css";
import styled from "styled-components";

const InnerDiv = styled.div`
  background: rgba(0, 0, 0, 0.811);
  color: rgb(243, 131, 4);
  padding: 2%;
  margin: 2%;
  width: 20%;
  opacity: 0.8;
  border-radius: 10px;
  @media (max-width: 968px) {
    width: 100%;
  }
  @media (max-width: 668px) {
    width: 400px;
  }
`;

const OuterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;
const InInput = styled.input`
  width: 20%;
  height: 40px;
  background: lightblue;
  opacity: 0.5;
  @media (max-width: 968px) {
    width: 90%;
    text-align: center;
  }
  @media (max-width: 668px) {
    width: 90%;
  }
`;

const IButton = styled.button`
  width: 20%;
  @media (max-width: 968px) {
    width: 90%;
    margin-bottom: 25%;
    height: 50px;
    color: gray;
  }
  @media (max-width: 668px) {
    width: 90%;
    margin-bottom: 25%;
    height: 50px;
    color: gray;
  }
`;
const IForm = styled.form`
  margin-left: 2%;
  @media (max-width: 968px) {
    margin-left: 2%;
  }
  @media (max-width: 668px) {
    margin-left: 2%;
  }
`;
class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: ""
    };
  }
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.props.exerciseGet(this.props.match.params.id);
  }

  handleSubmit = e => {
    e.preventDefault();
    const modifiedObj = {
      exercises: this.state.exercise
    };
    this.props.exercise(this.props.match.params.id, modifiedObj);
    this.setState({
      exercise: ""
    });
  };

  render() {
    // console.log("exercise", this.props.goals);
    const { exercise } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <OuterDiv>
          {this.props.goals.map(item => (
            <InnerDiv key={item.id} className="exerciseInner">
              <p>{item.exercises}</p> <p>{item.date}</p>
            </InnerDiv>
          ))}
        </OuterDiv>
        <IForm onSubmit={e => handleSubmit(e)}>
          <FormGroup>
            {/* <button className="btn">Back</button> */}
            <InInput
              size="lg"
              type="text"
              value={exercise}
              name="exercise"
              onChange={handleChange}
              placeholder="enter your exercise"
            />
          </FormGroup>

          <IButton>Update</IButton>
        </IForm>
      </div>
    );
  }
}

const mapStateToProps = ({ updatingExercise, error, goals }) => ({
  error,
  updatingExercise,
  goals
});

export default connect(
  mapStateToProps,
  { exercise, exerciseGet }
)(Exercises);
