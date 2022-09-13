import { Box, colors } from '@mui/material';
import React from 'react'
import NumberFormat from 'react-number-format'

export default function CurrencyFormat(props) {
    const { decimalScale, prefix = "$", value, numberClassName, prefixSx, disableAlignment = true } = props;
    return (
        <NumberFormat
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={decimalScale?decimalScale:2}
            fixedDecimalScale="true"
            value={Math.abs(value)}           
            displayType="text"
            renderText={(formattedValue)=>{
                return (<Box component={"span"} sx={{...disableAlignment?{display: "flex", justifyContent: "end"}:{},...value<0?{color: colors.red[500]}:{}}}>
                    {prefix&&
                        <Box component={"span"} sx={{px: 1, whiteSpace: "nowrap",...prefixSx}}> {prefix} </Box>
                    }
                    <Box component={"span"} sx={value<0?{color: colors.red[500]}:{}}>{formattedValue}</Box>
                </Box>);
            }}/>
    )
}
