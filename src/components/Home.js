import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import QuestionCard from "./QuestionCard";
import * as Quiz from "../quiz_question.json";

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
    marginTop: theme.spacing(5),
    fontWeight: 500,
  },
}));

const Home = ({
  history,
  match,
  setAllAnswers,
  personality,
  addToPersonality,
}) => {
  // custome classes for material-ui
  const classes = useStlyes();
  // States
  const [questions, setQuestions] = useState([]);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [number, setNumber] = useState(0);

  const [filteredPersonality, setFilteredPersonality] = useState([]);

  useEffect(() => {
    setQuestions(Quiz.questions);
  }, []);

  const nextQuestion = () => {
    setNumber(number + 1);
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container className={classes.root}>
          <Grid item md={6} className={classes.quizContainer}>
            <Typography
              variant='h4'
              color='inherit'
              className={classes.heading}>
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
                personality={personality}
                setAllAnswers={setAllAnswers}
                history={history}
                match={match}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
