import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader, IconButton, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Download } from '@mui/icons-material';


export default function Tickets() {
  const ticketList = [{
    date: new Date(),
    price: 400,
    description: "Cuota agosto 2022",
    nRef: 563413587
  },
  {
    date: new Date(),
    price: 400,
    description: "Cuota julio 2022",
    nRef: 563413587
  },
  {
    date: new Date(),
    price: 400,
    description: "Cuota junio 2022",
    nRef: 563413587
  },
  {
    date: new Date(),
    price: 400,
    description: "Cuota mayo 2022",
    nRef: 563413587
  },
  {
    date: new Date(),
    price: 400,
    description: "Cuota abril 2022",
    nRef: 563413587
  },]
  return (<>
    <Card sx={{mt: 2}}>
      <CardContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {ticketList.map(ticket=>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="download">
                  <Download />
                </IconButton>
              }>
              <ListItemText
                primary={ticket.description}
                secondary={<Stack>
                  <Typography variant='caption'>{ticket.date?.toLocaleString('es-es')}</Typography>
                  <Typography variant='caption'>Ref: {ticket.nRef}</Typography>
                </Stack>}
                />
            </ListItem>
          )}
        </List>
      </CardContent>
    </Card>
  </>);
}
Tickets.pageTitle = "Recibos";
Tickets.auth = true;