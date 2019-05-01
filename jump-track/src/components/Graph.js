import React from "react";
import { connect } from "react-redux";
import c3 from "c3";

class Graph extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      c3.generate({
        bindto: "#chart",
        data: {
          columns: [["Jump Height Progression", ...this.props.goals.reverse()]]
        }
      });
    }, 500);
  }
  render() {
    return (
      <div
        id="chart"
        style={{
          height: "400px",
          width: "99%",
          marginRight: "1%",
          background: "brown"
        }}
      />
    );
  }
}

const mapStateToProps = ({ goals }) => ({
  goals: goals.map(goal => goal.jump_height)
});

export default connect(mapStateToProps)(Graph);
