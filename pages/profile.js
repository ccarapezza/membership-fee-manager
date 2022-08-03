import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, color } from '@mui/system';


export default function Profile() {
  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent sx={{display: "flex"}}>
        <Avatar
          alt="Remy Sharp"
          src="https://revistathc.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-18-at-16.32.09.jpeg"
          sx={{ width: "128px", height: "128px"}}
        />
        <Box sx={{px: 2, width: "100%"}}>
          <Typography variant="h6" component="div">
            Jack Herer
          </Typography>
          <hr style={{margin: 0, borderColor: "lightgray", borderWidth: "1px"}}/>
          <small style={{borderColor: "red!important"}} >Nombre y Apellido</small>
          <Typography variant="h6" component="div" sx={{marginTop: "10px"}}>
            34081431
          </Typography>
          <hr style={{margin: 0, color: "red!important"}}/>
          <small style={{borderColor: "grey"}} >DNI</small>
          <Typography variant="h6" component="div">
            carapezza.christian@gmail.com
          </Typography>
          <hr style={{margin: 0}}/>
          <small style={{borderColor: "grey"}} >Email</small>
          <p>Socio Activo</p>
        </Box>
      </CardContent>
    </Card>

  );
}

Profile.auth = true