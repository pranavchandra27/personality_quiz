import React, { useState } from "react";
import Home from "./components/Home";
import Result from "./components/Result";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [personality, setPersonality] = useState([]);

  const setAllAnswers = answer => {
    setAnswers(answers.concat(answer));
  };

  const addToPersonality = userPersonality => {
    const personalityType = userPersonality.map(type => type);
    setPersonality(personality.concat(personalityType));
  };

  return (
    <div className='App'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='star3'></div>
      <div className='header'>
        <h1>Curiosum</h1>
      </div>
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <Home
              {...props}
              setAllAnswers={setAllAnswers}
              addToPersonality={addToPersonality}
              personality={personality}
            />
          )}
        />
        <Route
          exact
          path='/result'
          render={props => (
            <Result {...props} personality={personality} answers={answers} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
