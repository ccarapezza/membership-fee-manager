import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Badge, Chip, Divider } from '@mui/material';
import CodeloIcon from '../assets/icons/CodeloIcon';


export default function Profile() {
  return (
    <Card sx={{ my: 2, borderWidth:"1px", borderColor: "black", borderStyle: "solid", backgroundColor: "#efdfdf", width: "fit-content", minWidth: "560px", maxWidth: "560px" }}  elevation={7}>
      <Box sx={{display: "flex", alignItems: "end", pt: 1, pl: 2, backgroundColor: "#00000099"}}>
        <Box sx={{m:0, p:0}}>
          <CodeloIcon/>
        </Box>
        <Typography variant='h6' sx={{ml: 2, color: "white"}}>
          Asociación Civil Cogollos del Oeste
        </Typography>
      </Box>
      <Divider/>
      <CardContent sx={{display: "flex", alignItems: "center"}}>
        <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <Avatar
            alt="Remy Sharp"
            src="https://revistathc.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-18-at-16.32.09.jpeg"
            sx={{ width: "128px", height: "128px", mx: 2}}
          />
          <Chip size="small" variant='outlined' label={"Socio Activo"} sx={{mt: 1}} />
          <Chip size="small" variant='filled' color='success' label={"Al día"} sx={{mt: 1}} />
          {/*<Chip variant='filled' color='error' label={"Posee deudas"} sx={{mt: 1}} />*/}
        </Box>
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
        </Box>
      </CardContent>
      <Divider/>
      <Box sx={{display: "flex", justifyContent: 'space-between'}}>
        <small style={{textAlign: "left", marginLeft: 5, display: "block", fontStyle: "italic"}}>
          Generado el {new Date().toLocaleDateString()} a las {new Date().toLocaleTimeString()}
        </small>
        <small style={{textAlign: "right", marginRight: 5, display: "block", fontWeight: "bold"}}>
          Socio desde {new Date().toLocaleDateString()}
        </small>
      </Box>
    </Card>

  );
}

Profile.auth = true