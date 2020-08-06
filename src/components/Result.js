import React, { useEffect } from "react";
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
import { findCombination } from "../rapper_combination";

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

  useEffect(() => {
    let counts = personality.reduce((a, c) => {
      a[c] = (a[c] || 0) + 1;
      return a;
    }, {});
    let maxCount = Math.max(...Object.values(counts));
    let mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);
    findCombination(`${mostFrequent[0]} and ${mostFrequent[1]}`);
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid container className={classes.root}>
          <Grid item md={6} className={classes.quizContainer}>
            <Typography variant='h4' className={classes.heading}>
              Your Personality
            </Typography>
            <Card className={classes.card}>
              <CardContent>
                {!answers.length ? (
                  <Box component='div'>
                    <Typography variant='h6' style={{ color: "#ddd" }}>
                      No Result! Take A Quiz
                    </Typography>
                    <Button color='secondary' variant='text'>
                      <Link to='/'>Start Quiz</Link>
                    </Button>
                  </Box>
                ) : (
                  <Box component='div'>
                    <Typography variant='h6' style={{ color: "#ddd" }}>
                      Results
                    </Typography>
                    {answers.map(answer => (
                      <Box component='div'>
                        <Typography>{answer}</Typography>
                      </Box>
                    ))}
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
