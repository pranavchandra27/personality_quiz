import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Snackbar,
  Slide,
  LinearProgress,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2),
    backgroundColor: "#1b2735",
  },
  questionNumber: {
    marginTop: theme.spacing(2),
  },
  question: {
    marginTop: theme.spacing(2),
    fontSize: "18px",
    fontWeight: 500,
    color: "#dadada",
  },
  answerBtn: {
    marginBottom: theme.spacing(1.5),
  },
  nextBtn: {
    marginTop: theme.spacing(2),
    color: "#dddddd",
    borderColor: "#dddddd",
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
  setAllAnswers,
  history,
  match,
}) => {
  const classes = useStyles();
  const [snackbar, setSnackbar] = useState({
    open: false,
    Transition: Slide,
  });
  const [selectedPersonality, setSelectedPersonlaity] = useState();
  const [progress, setProgress] = useState(0);

  const onNextClick = Transition => {
    if (selectedAnswer) {
      nextQuestion();
      setSelectedAnswer(null);
      onPersonalitySelect();
      setAllAnswers(selectedAnswer);
      setProgress((questionNum + 1) * 10);
    } else {
      setSnackbar({
        open: true,
        Transition,
      });
    }
  };

  const onSubmit = Transition => {
    if (selectedAnswer) {
      setSelectedAnswer(null);
      onPersonalitySelect();
      setAllAnswers(selectedAnswer);
      history.push("/result");
    } else {
      setSnackbar({
        open: true,
        Transition,
      });
    }
  };

  const onPersonalitySelect = () => {
    setPersonality(selectedPersonality);
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
          <LinearProgress
            color='secondary'
            variant='determinate'
            style={{ width: "100%", borderRadius: "5px", height: "10px" }}
            value={progress}
          />
          <Typography
            variant='h5'
            color='secondary'
            className={classes.questionNumber}>
            Question: {questionNum + 1}/{totalQuestion}
          </Typography>

          <Typography className={classes.question} paragraph>
            {question}
          </Typography>

          {answers.length &&
            answers.map(answer => (
              <Button
                key={answer.id}
                variant='outlined'
                color={
                  selectedAnswer === answer.answer ? "secondary" : "default"
                }
                fullWidth
                style={{
                  color: "#fff",
                }}
                onClick={() => {
                  setSelectedAnswer(answer.answer);
                  setUserSelectedAnswer(answer);
                  setSelectedPersonlaity(answer.personality);
                }}
                className={classes.answerBtn}>
                {answer.answer}
              </Button>
            ))}

          {/* <Typography>
            {!selectedAnswer
              ? "No Answer Selected"
              : `Your Answer: ${selectedAnswer}`}
          </Typography> */}

          {questionNum !== 10 ? (
            <Button
              onClick={() => {
                onNextClick(SlideTransition);
              }}
              variant='outlined'
              className={classes.nextBtn}>
              Next Question
            </Button>
          ) : (
            <Button
              onClick={() => {
                onSubmit(SlideTransition);
              }}
              variant='outlined'
              className={classes.nextBtn}>
              Submit And Get Result
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
