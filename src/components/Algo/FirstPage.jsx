import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Radio,
  Stack,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

// import { Link } from "react-router-dom" ;
import TopAppBar from '../TopAppBar';

function FirstPage({}) {
  const [userSelection, setUserSelection] = useState('');

  const handleNext = () => {
    handlePageChange(userSelection);
    nextPage();
  };
  const handleChange = (event) => {
    setUserSelection(event.target.value);
  };
  return (
    <>
      {
        <Grid
          style={{
            backgroundImage: 'url("/AlgoBG.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            display: 'flex',
            justifyContent: 'center',
            width: '60%',
            marginTop: '3%',
            borderRadius: '20px',
            minHeight: '600px',
          }}
          item
          xs={12}
        >
          <Stack gap={2} alignItems="center" width="90%">
            <Box
              alignItems="center"
              p={2}
              textAlign="center"
              top="5%"
              width="80%"
            >
              <Typography
                style={{
                  color: '#435834',
                  fontFamily: 'Helvetica Neue',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  marginTop: '20px',
                  textAlign: 'center',
                }}
                gutterBottom
                variant="h5"
              >
                Where your needs meet our curated Service Provider Network
              </Typography>

              <Divider style={{ backgroundColor: '#AF7D51', height: '1px' }} />
            </Box>
            <Divider />
            <Box
              alignItems="center"
              bgcolor="#f2f2f2"
              maxWidth="400px"
              p={2}
              textAlign="center"
              width="80%"
              borderRadius="10px"
            >
              <Box>
                <Typography
                  fontFamily="Helvetica Neue"
                  fontSize="1rem"
                  fontWeight="500px"
                  textAlign="center"
                  marginBottom="5px"
                  marginTop="5px"
                >
                  Here you'll be guided through a set of questions designed to
                  pinpoint your specific needs. Once you've answered them, we'll
                  provide tailored recommendations that perfectly match your
                  requirements. Simply tell us what you're looking for, and
                  we'll present you with the ideal products and experts.
                </Typography>
              </Box>
              <img
                alt="Home Owner"
                src="/Logo.png"
                style={{ height: '60%', width: '50%' }}
              />
            </Box>
            <Grid
              style={{
                width: '30%',
              }}
              display="flex"
              justifyContent="center"
            >
              <Button
                color="primary"
                size="large"
                sx={{ borderRadius: 2, margin: 3, width: 1 / 2 }}
                type="submit"
                variant="contained"
                onClick={handleNext}
              >
                Start
              </Button>
            </Grid>
          </Stack>
        </Grid>
      }
    </>
  );
}

export default FirstPage;
