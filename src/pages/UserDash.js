import React from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';

// @mui
// import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// sections
import {
  AppNewsUpdate,
  AppOrderTimeline,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'transparent',
  boxShadow: 24,
  p: 4,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CallIcon onClick={handleOpen}>Open Child Modal</CallIcon>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <h2 id="child-modal-title">Shakti Shalini</h2>
          <p id="child-modal-description">
          SHAKTI SHALINI IS AN NGO THAT SUPPORTS SURVIVORS OF GENDER AND SEXUAL VIOLENCE, AND WORKS WITH COMMUNITIES TO PREVENT EVERYDAY VIOLENCE.
OUR HELPLINE IS OPERATIONAL BETWEEN
10AM TO 6PM (MONDAY-FRIDAY).
Helpline Num­bers
Call: 011-24373737
Call/What­sApp: 9654462722
Call/What­sApp: 7838957810

          </p>
          <Button onClick={handleClose}>yes make a Call</Button>
        </Box>
      </Modal>
      </>
  );
}


export default function UserDash() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="/dashboard/map">
              <AppWidgetSummary title="Book a Ride" color="success" icon={'ant-design:car-filled'} />
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Link to="/dashboard/track" underline="none">
              <AppWidgetSummary title="Connect with Walk Buddy" color="error" icon={'ant-design:comment-outlined'} />
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Link to="/dashboard/famtrack">
            <AppWidgetSummary title="Track Family" color="warning" icon={'ant-design:safety-certificate-outlined'} textdecoration="none" />
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="HelpLine Numbers" color="error" icon={'ant-design:phone-filled'} onClick={handleOpen}/>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Look out for emergency 
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Shakti Shalini - women's shelter	
                  <span>(011) 24373736 / 24373737</span>
                  <span><ChildModal sx={{margin:1}}/></span>
                  <br/>
                  <br/>
                  Sakshi - violence intervention center	
                  <span>(0124) 2562336 / 5018873</span>
                  <CallIcon/>
                  </Typography>
                </Box>
              </Modal>

          </Grid>
        </Grid>
      </Container>
    </>
  );
}
