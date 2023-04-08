import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';

export default function Feedback() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        width: 1000,
        height:600,
        display: 'block',
      }}
    >
        <Box
            component="img"
            src="/assets/illustrations/illustration_avatar.png"
            sx={{ width: 400, position: 'absolute', top: 150 }}
          />
          <Typography variant="h2" align='center' sx={{marginLeft:24}}>How's your experience with SheSafe ?</Typography>
          <br/>
          <Typography variant='h6'align='center' sx={{marginLeft:24}}>Help us get better with your valuable feedbacks</Typography>
          <TextField
          id="outlined-multiline-static"
          label="Feedback"
          multiline
          sx={{marginLeft:43,marginTop:6,width:600}}
          rows={7}
          defaultValue="Enter Feedback"
        />
        <Rating
        name="simple-controlled"
        size="large"
        value={value}
        sx={{marginLeft:65,marginTop:2}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
     

    </Box>
  );
}