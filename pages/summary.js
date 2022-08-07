import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import CurrencyFormat from '../src/CurrencyFormat';

export default function Summary() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
          <CurrencyFormat value={14654.25} />
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

Summary.pageTitle = "Resumen de Cuenta";
Summary.auth = true;