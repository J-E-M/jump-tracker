import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeDiv">
      <section className="homeFlex">
        <h1>Verti-Jump</h1>
      </section>
      <p>
        Welcome to the Jump Tracker application. Jumping is one athletic
        movement that can greatly effect your game, for better or worse. With a
        specialized training regiment YOU can improve your jumping height and or
        distance. This requires sheer force of will combined with 100%
        commitment. There are going to be alot of obstacles in your way. We all
        want to have some type of gratification when we truly apply ourselves to
        a goal. Documenting the information for jumping can be frustrating. You
        find a great jumping exercise regime here and there, but not at the same
        place and time. What about documenting the benchmark you started your
        exercise program at? Recording the data can not only be difficult, but
        also unrewarding. This can cause us mentally to feel ungratified with
        our efforts.
      </p>
      <p>
        Enter the world of technology. Have you ever noticed how your life is
        streamlined by technology. It can encompass your life, both leading you
        in the direction you intended, or leave you lost in the wilderness. This
        is a fine line. With our technologic application, we give you access to
        enhancing your life's endeavors to jump higher. We want you to "JUMP"
        past your goals, and help you along the whole way. The foreshadowed
        issues above are easily handled wiht this application. Please...
      </p>
      <p>
        <Link to="/logIn">Log In </Link>or{" "}
        <Link to="/register">Register today!</Link>
      </p>
    </div>
  );
};
export default Home;
