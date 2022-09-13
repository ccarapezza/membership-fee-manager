import { Button, Card, CardContent, Divider, Stack, TextField, Typography } from '@mui/material';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import MembershipFeeManager from '../../../services/MembsershipFeeManagerService'

export default function MemberTypeCreate({createdMemberType}) {
    const [name, setName] = useState("");
    const router = useRouter();

    const encodeQueryData = (data) => {
        const ret = [];
        for (let d in data){
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
        return ret.join('&');
     }

    const guardar = () => {
        router.push(router.pathname+"?"+encodeQueryData({name: name}));
    }

    useEffect(() => {
        if(createdMemberType){
            router.push("/admin/memberType/list");
        }
    }, [createdMemberType]);

    return (
        <Card sx={{mt: 2}}>
            <CardContent>
                <Stack gap={2}>
                    <Typography variant='h5'>Nuevo tipo de socio</Typography>
                    <Divider sx={{my:1}}/>
                    <TextField
                        required
                        id="outlined-required"
                        label="Descripción"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />
                    <Button disabled={!name||name.trim()===""} variant="contained" onClick={()=>{guardar()}}>Guardar</Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

MemberTypeCreate.pageTitle = "Tipo de socio";
MemberTypeCreate.auth = true;

// This gets called on every request
export async function getServerSideProps(context) {
    const { query } = context;
    const { name } = query;
    let props = {};

    if(name){
        const session = await getSession(context);
        const createdMemberType = await MembershipFeeManager.createMemberType(session, {
            name: name
        });
        props = {
            ...props,
            createdMemberType,
        }
    }
    
    return { props: {
        ...props
    } }
}