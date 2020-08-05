import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Snackbar,
  Slide,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2),
  },
  question: {
    marginTop: theme.spacing(2),
  },
  answerBtn: {
    marginBottom: theme.spacing(1.5),
  },
  nextBtn: {
    marginTop: theme.spacing(2),
  },
}));

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const QuestionCard = ({
  questionNum,
  totalQuestion,
  question,
  answers,
  nextQuestion,
  setPersonality,
  selectedAnswer,
  setUserSelectedAnswer,
  setSelectedAnswer,
}) => {
  const classes = useStyles();
  const [snackbar, setSnackbar] = useState({
    open: false,
    Transition: Slide,
  });

  const onNextClick = Transition => {
    if (selectedAnswer) {
      nextQuestion();
      setSelectedAnswer(null);
    } else {
      setSnackbar({
        open: true,
        Transition,
      });
    }
  };

  if (snackbar.open) {
    setTimeout(() => {
      setSnackbar({
        ...snackbar,
        open: false,
      });
    }, 1500);
  }

  return (
    <Card className={classes.card}>
      {!question.length ? (
        <CardContent>
          <Typography variant='h4'>Sorry! No Question Found</Typography>
        </CardContent>
      ) : (
        <CardContent>
          <Typography variant='h6'>
            Question: {questionNum + 1}/{totalQuestion}
          </Typography>
          <Typography className={classes.question} paragraph>
            {question}
          </Typography>

          {answers.length &&
            answers.map(answer => (
              <Button
                key={answer.id}
                variant='text'
                color={
                  selectedAnswer === answer.answer ? "secondary" : "default"
                }
                fullWidth
                onClick={() => {
                  setSelectedAnswer(answer.answer);
                  setUserSelectedAnswer(answer);
                  setPersonality(answer.personality);
                }}
                className={classes.answerBtn}>
                {answer.answer}
              </Button>
            ))}

          <Typography>
            {!selectedAnswer ? "No Answer Selected" : selectedAnswer}
          </Typography>

          {questionNum === 10 ? (
            <Typography>You have made it to the end.</Typography>
          ) : (
            <Button
              onClick={() => {
                onNextClick(SlideTransition);
              }}
              variant='contained'
              className={classes.nextBtn}>
              Next Question
            </Button>
          )}
          <Snackbar
            open={snackbar.open}
            TransitionComponent={snackbar.Transition}
            message='Please select an answer!'
            key={snackbar.Transition.name}
          />
        </CardContent>
      )}
    </Card>
  );
};

export default QuestionCard;
