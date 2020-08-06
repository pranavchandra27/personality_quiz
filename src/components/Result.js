import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { findCombination, possiblePersonalities } from "../rapper_combination";

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
    color: "#ddd",
  },
  card: {
    marginTop: theme.spacing(2),
    backgroundColor: "#1b2735",
  },
}));

const Result = ({ answers, personality }) => {
  const classes = useStlyes();
  const [rapperMatch, setMatch] = useState("");

  useEffect(() => {
    let counts = personality.reduce((a, c) => {
      a[c] = (a[c] || 0) + 1;
      return a;
    }, {});
    let maxCount = Math.max(...Object.values(counts));
    let mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);

    const randomPersonality = !mostFrequent[1]
      ? possiblePersonalities()
      : mostFrequent[1];

    const matchedRapper = !findCombination(
      `${mostFrequent[0]} and ${randomPersonality}`
    )
      ? findCombination(`${randomPersonality} and ${mostFrequent[0]}`)
      : findCombination(`${mostFrequent[0]} and ${randomPersonality}`);

    console.log(matchedRapper);
    setMatch(matchedRapper);
    return;
  }, [personality]);

  return (
    <React.Fragment>
      <Container>
        <Grid container className={classes.root}>
          <Grid item md={6} className={classes.quizContainer}>
            <Typography variant='h4' className={classes.heading}>
              Your Rapper Match
            </Typography>
            <Card className={classes.card}>
              <CardContent>
                {!answers.length ? (
                  <Box component='div'>
                    <Typography variant='h6' style={{ color: "#ddd" }}>
                      No Result! Take A Quiz
                    </Typography>
                    <Button color='secondary' variant='text'>
                      <Link to='/quiz'>Start Quiz</Link>
                    </Button>
                  </Box>
                ) : (
                  <Box component='div'>
                    <Typography variant='h6' style={{ color: "#ddd" }}>
                      Here is the match according to your answers
                    </Typography>
                    <Typography variant='h1' style={{ color: "#ddd" }}>
                      {rapperMatch}
                    </Typography>
                    <Button variant='contained'>
                      <Link to='/quiz'>Go To Quiz</Link>
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Result;
