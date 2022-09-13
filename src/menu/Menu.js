import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "next-auth/react"
import { AdminPanelSettings, Badge, Elevator, Event, Group, MonetizationOn, Paid, Person, Receipt, RecentActors } from '@mui/icons-material';
import { Collapse, Divider, List } from '@mui/material';
import Link from '../Link';

import React, { useState } from 'react'

export default function Menu() {
  const [panelAdminOpen, setPanelAdminOpen] = useState(false);
  return (
    <>
      <Link noLinkStyle href="/dashboard">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link noLinkStyle href="/profile">
        <ListItemButton>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
            <ListItemText primary="Perfil" />
        </ListItemButton>
      </Link>
      <Link noLinkStyle href="/summary">
        <ListItemButton>
          <ListItemIcon>
            <MonetizationOn />
          </ListItemIcon>
            <ListItemText primary="Resumen de Cuenta" />
        </ListItemButton>
      </Link>
      <Link noLinkStyle href="/tickets">
        <ListItemButton>
          <ListItemIcon>
            <Receipt />
          </ListItemIcon>
            <ListItemText primary="Recibos" />
        </ListItemButton>
      </Link>
      <Link noLinkStyle href="/smart-card">
        <ListItemButton>
          <ListItemIcon>
            <Badge />
          </ListItemIcon>
            <ListItemText primary="Credencial" />
        </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon>
          <Event />
        </ListItemIcon>
        <ListItemText primary="Eventos" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <ListItemButton onClick={()=>{setPanelAdminOpen(!panelAdminOpen)}}>
        <ListItemIcon>
          <AdminPanelSettings />
        </ListItemIcon>
          <ListItemText primary="Panel Admin." />
      </ListItemButton>
      <Collapse component="li" in={panelAdminOpen} timeout="auto" unmountOnExit>
        <Divider/>
        <List disablePadding sx={{pl: 2}}>
          <Link noLinkStyle href="/admin/user/list">
            <ListItemButton sx={{borderLeft: "1px solid grey"}}>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Usuarios" />
            </ListItemButton>
          </Link>
          <Link noLinkStyle href="/admin/member/list">
            <ListItemButton sx={{borderLeft: "1px solid grey"}}>
              <ListItemIcon>
                <RecentActors />
              </ListItemIcon>
              <ListItemText primary="Socios" />
            </ListItemButton>
          </Link>
          <Link noLinkStyle href="/admin/memberType/list">
            <ListItemButton sx={{borderLeft: "1px solid grey"}}>
              <ListItemIcon>
                <Elevator />
              </ListItemIcon>
              <ListItemText primary="Tipo de Socio" />
            </ListItemButton>
          </Link>
          <Link noLinkStyle href="/admin/feeType/list">
            <ListItemButton sx={{borderLeft: "1px solid grey"}}>
              <ListItemIcon>
                <Paid />
              </ListItemIcon>
              <ListItemText primary="Tipo de Cuota" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton onClick={()=>signOut({ callbackUrl: 'https://localhost:3000/' })}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Cerrar sesión" />
      </ListItemButton>
    </>
  )
}