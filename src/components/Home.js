import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

import * as Quiz from "../quiz_question.json";
import QuestionCard from "./QuestionCard";

const useStlyes = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  quizContainer: {
    width: "100%",
  },
  heading: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStlyes();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [number, setNumber] = useState(0);
  const [personality, setPersonality] = useState([]);

  useEffect(() => {
    setQuestions(Quiz.questions);
  }, []);

  const nextQuestion = () => {
    setNumber(number + 1);
  };

  const addToPersonality = userPersonality => {
    userPersonality.map(type => setPersonality([...personality, type]));
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container className={classes.root}>
          <Grid item md={6} className={classes.quizContainer}>
            <Typography variant='h2' className={classes.heading}>
              Personality Quiz
            </Typography>
            {questions.length && (
              <QuestionCard
                question={questions[number].question}
                answers={questions[number].answers}
                nextQuestion={nextQuestion}
                questionNum={number}
                totalQuestion={questions.length}
                setPersonality={addToPersonality}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                setUserSelectedAnswer={setUserSelectedAnswers}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
