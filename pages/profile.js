import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Badge, CardHeader, Chip, Divider, Stack, useTheme } from '@mui/material';
import CodeloIcon from '../assets/icons/CodeloIcon';


export default function Profile() {
  const theme = useTheme();
  return (<>
    <Card sx={{mt: 2}}>
      <CardContent>
        <Stack direction="row" sx={{display: "flex", alignItems: "center"}}>
          <Avatar
            alt="Remy Sharp"
            src="https://revistathc.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-18-at-16.32.09.jpeg"
            sx={{ width: "72px", height: "72px", mx: 2, borderWidth:3, color: theme.palette.primary, borderStyle: "solid"}}
          />
          <Stack>
            <Typography variant='h6'>Christian Carapezza</Typography>
            <Typography variant='subtitle1'>Socio Activo</Typography>    
          </Stack>
        </Stack>
      </CardContent>
    </Card>
    <Card sx={{mt: 2}}>
      <CardHeader title="Datos Personales" sx={{borderBottom: "1px solid lightgray"}}/>
      <CardContent>
        <Stack>
          <Typography variant='subtitle2'>Nombre y Apellido</Typography>
          <Typography variant='subtitle1'>Christian carapezza</Typography>
          <Divider sx={{my: 1}} />
          <Typography variant='subtitle2'>DNI</Typography>
          <Typography variant='subtitle1'>34081434</Typography>
          <Divider sx={{my: 1}} />
          <Typography variant='subtitle2'>Domicilio</Typography>
          <Typography variant='subtitle1'>Calle Falsa 123</Typography>
          <Divider sx={{my: 1}} />
          <Typography variant='subtitle2'>Teléfono</Typography>
          <Typography variant='subtitle1'>11 8724 6945</Typography>
          <Divider sx={{my: 1}} />
          <Typography variant='subtitle2'>Socio desde</Typography>
          <Typography variant='subtitle1'>{new Date().toLocaleDateString('es-es', {day:"numeric", year:"numeric", month:"long"})}</Typography>
        </Stack>
      </CardContent>
    </Card>
  </>);
}

Profile.auth = true