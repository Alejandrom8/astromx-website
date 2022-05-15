import Head from 'next/head'
import Box from '@material-ui/core/Box';
import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery, Container, Button,
} from '@material-ui/core';
import clsx from 'clsx';
import Menu from "../components/App/Menu";
import React from "react";
import ParticipantsCarrousel from "../components/MembersSlider";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
    padding: theme.spacing(5, 0),
    overflow: 'hidden'
  },
  presentation: {
    backgroundColor: '#111',
    color: '#fff',
  },
  whatWeDo: {
    backgroundColor: '#274b72'
  },
  we: {
    width: '100%',
    borderRadius: '8px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2.2em'
  },
  paragraph: {
    fontSize: '19px',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '30px',
    letterSpacing: '.009em',
  },
}));

export default function Home() {
  const classes = useStyles(),
      theme = useTheme(),
      isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return <Box className={classes.root}>
    <Head>
      <title>Cosmoblastos </title>
    </Head>
    <Hero />
    <Projects />
    <Box className={clsx(classes.section, classes.presentation)}>
      <Box pt={4} />
      <Container>
        <Grid container spacing={5}>
          <Grid container item xs={12} md={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant={'h5'} className={classes.title}>
                Demostración
              </Typography>
              <Box pb={2} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'h6'}>
              Escenario: emergencia
            </Typography>
            <ReactPlayer
                  playing={false}
                  width={'100%'}
                  height={'500px'}
                  url={'/RCP.mp4'}
                  controls={true}
              />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'h6'}>
              Escenario: COVID
            </Typography>
            <ReactPlayer
                  playing={false}
                  width={'100%'}
                  height={'500px'}
                  url={'/covid.mp4'}
                  controls={true}
              />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'h6'}>
              Escenario: ejercicio
            </Typography>
            <ReactPlayer
                  playing={false}
                  width={'100%'}
                  height={'500px'}
                  url={'/ejercicio.mp4'}
                  controls={true}
              />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Box>
}
