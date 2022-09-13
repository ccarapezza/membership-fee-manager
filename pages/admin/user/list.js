import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { getSession } from 'next-auth/react';
import React from 'react'
import MembershipFeeManager from '../../../services/MembsershipFeeManagerService'

export default function UserList({data}) {
    console.log(data);
    
    return (
      <Card sx={{mt: 2}}>
        <CardContent>
          {data?.length>0?
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Usuario</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      hover
                      key={row.email}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          :
            <Typography>No se encuentran usuarios...</Typography>
          }
        </CardContent>
      </Card>
    );
}

UserList.pageTitle = "Usuarios";
UserList.auth = true;

// This gets called on every request
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const feeTypeList = await MembershipFeeManager.usersList(session);
  return { props: { data: feeTypeList } }
}