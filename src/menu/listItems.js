import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "next-auth/react"
import { Badge, Event, MonetizationOn, Receipt } from '@mui/icons-material';
import { Divider } from '@mui/material';

export const mainMenu = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MonetizationOn />
      </ListItemIcon>
      <ListItemText primary="Resumen de Cuenta" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Receipt />
      </ListItemIcon>
      <ListItemText primary="Recibos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Badge />
      </ListItemIcon>
      <ListItemText primary="Credencial" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Event />
      </ListItemIcon>
      <ListItemText primary="Eventos" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />
    <ListItemButton onClick={()=>signOut({ callbackUrl: 'http://localhost:3000/' })}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Cerrar sesión" />
    </ListItemButton>
  </>
);