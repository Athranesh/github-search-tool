import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>
        <br />
        This app is powered by React, purpose of which is to provide an
        interactive interface for finding Github users and their profile
        information in an easy and efficient way.
      </p>
      <p>The app takes advantage of context API for state management.</p>
      <br />
      <p>Version 1.0.0</p>
    </Fragment>
  );
};

export default About;
