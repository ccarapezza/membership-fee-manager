import { Add, Delete, Edit } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import MembershipFeeManager from '../../../services/MembsershipFeeManagerService'
import SimpleDialog from '../../../src/SimpleDialog';

export default function MemberTypeList({data}) {
    console.log(data);

    return (
      <Card sx={{mt: 2}}>
        <CardContent>
          <Box sx={{display: "flex", justifyContent: "right"}}>
            <Link href="/admin/memberType/create">
              <Button variant='contained' size='small' startIcon={<Add/>}>Nuevo tipo de socio</Button>
            </Link>
          </Box>
          <Divider sx={{my: 2}}/>
          <SimpleDialog title="Mensaje" text="Esta seguro que desea eliminar?" open={true}/>
          {data?.length>0?
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell sx={{textAlign: "right", px: "25px"}}>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row) => (
                    <TableRow
                      hover
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell sx={{textAlign: "right"}}>
                        <IconButton>
                          <Edit/>
                        </IconButton>
                        <IconButton>
                          <Delete/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          :
            <Typography>No se encontraron tipos de socio</Typography>
          }
        </CardContent>
      </Card>
    );
}

MemberTypeList.pageTitle = "Tipos de Socio";
MemberTypeList.auth = true;

// This gets called on every request
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const memberTypeList = await MembershipFeeManager.memberTypeList(session);
  return { props: { data: memberTypeList } }
}