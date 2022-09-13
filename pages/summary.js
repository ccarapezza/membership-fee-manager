
import { Alert, AlertTitle, Box, Button, Card, CardContent, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CurrencyFormat from '../src/CurrencyFormat';
import useMercadopago from '../src/hooks/useMercadopago';
import MembershipFeeManager from '../services/MembsershipFeeManagerService'
import { getSession } from "next-auth/react";
import { useRouter } from 'next/router';

function Summary({ data }) {
  const router = useRouter();
  const mp = useMercadopago('TEST-66545bf4-c094-4eff-abb8-fb9a7a22a6e8', {
    locale: 'es-AR'
  });

  const [checked, setChecked] = useState([]);
  const [preferenceId, setPreferenceId] = useState();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [];

    for (let i = 0; i <= value; i++) {
      newChecked.push(i);
    }
    if (currentIndex !== -1) {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const paymentsList = [{
      expirationDate: new Date("10/08/2022"),
      price: 400,
      description: "Cuota agosto 2022",
      nRef: 563413587
    },
    {
      expirationDate: new Date("10/09/2022"),
      price: 400,
      description: "Cuota septiembre 2022",
      nRef: 563413588
    },
    {
      expirationDate: new Date("10/10/2022"),
      price: 400,
      description: "Cuota octubre 2022",
      nRef: 563413588
    },
    {
      expirationDate: new Date("10/11/2022"),
      price: 400,
      description: "Cuota noviembre 2022",
      nRef: 563413588
    },
  ]

  const pagar = () => {
    //obtenerPreference
    //setPreferenceId(1234);
    router.push({
      pathname: '/summary',
      query:{
        feeIds: [1,2,3]
      }
    })
  }

  useEffect(() => {
    console.log("DATA!!!!", data);
    if(data?.mercadopagoPreferenceId){
      setPreferenceId(data?.mercadopagoPreferenceId);
    }
  }, [data]);

  useEffect(() => {
    // Inicializa el checkout
    if(preferenceId){
      mp.checkout({
        preference: {
          id: preferenceId,
        },
        autoOpen: true, // Habilita la apertura automática del Checkout Pro
      });
    }
  }, [preferenceId]);

  return (<>
    <Card sx={{my: 2}}>
      <CardContent>
        {!paymentsList?
        <Alert severity="success">
          <AlertTitle>Estás al día</AlertTitle>
          No tienes pagos pendientes
        </Alert>
        :
        <Alert severity="error">
          <AlertTitle>Tienes cuotas pendientes</AlertTitle>
          Regulariza tus pagos para volver a estar activo
        </Alert>
        }
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <List sx={{ bgcolor: 'background.paper' }}>
          {paymentsList.map((payment, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <ListItem
                secondary={payment.expirationDate.toLocaleDateString('es-es', {day:"numeric", year:"numeric", month:"long"})}
                key={index+"-payment"}
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(index) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={payment.description} secondary={<CurrencyFormat value={payment.price}  />} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{display: "flex", justifyContent: 'end', borderTop: "1px solid lightgray", p: 2}}>
          <Stack>
            {checked?.length>0&&
              <Typography sx={{display: "flex"}}>
                <strong>Total:</strong>
                <CurrencyFormat value={paymentsList.reduce((total, payment, currentIndex)=>{
                    if(checked.indexOf(currentIndex)!==-1){
                      total+=payment.price;
                    }
                    return total;
                  },0)} />
              </Typography>
            }
            <Button disabled={!checked?.length} variant='contained' onClick={()=>pagar()}>Pagar</Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  </>);
}

// This gets called on every request
export async function getServerSideProps(context) {
  //context?.req?.headers
  const { query } = context;
  const { feeIds } = query;
  if(feeIds){
    const session = await getSession(context);
    console.log("session", session?.user?.accessToken);
    const paymentData = await MembershipFeeManager.mpPayment([1,2,3], session);
    return { props: { data: paymentData, test: "ahhh" } }
  }

  return { props: { } }

  // Pass data to the page via props
}

Summary.pageTitle = "Resumen de Cuenta";
Summary.auth = true;
export default Summary;