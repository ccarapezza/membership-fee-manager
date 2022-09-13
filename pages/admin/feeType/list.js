import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { getSession } from 'next-auth/react';
import React from 'react'
import MembershipFeeManager from '../../../services/MembsershipFeeManagerService'

export default function FeeTypeList({data}) {
    console.log(data);

    return (
      <Card sx={{mt: 2}}>
        <CardContent>
          {data?.length>0?
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>N° Socio</TableCell>
                    <TableCell>Nombre y Apellido</TableCell>
                    <TableCell>Categoría</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row) => (
                    <TableRow
                      hover
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{row.calories}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.fat}</TableCell>
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

FeeTypeList.pageTitle = "Tipo de cuota";
FeeTypeList.auth = true;

// This gets called on every request
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const feeTypeList = await MembershipFeeManager.feeTypeList(session);
  return { props: { data: feeTypeList } }
  // Pass data to the page via props
}