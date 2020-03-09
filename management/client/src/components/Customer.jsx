import React, {memo} from 'react';
import {TableRow, TableCell} from "@material-ui/core";
import CustomerDelete from "./CustomerDelete";




const Customer = memo(({id, image, name, birth, gender, job, stateRefresh}) => {
    return(
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={image} alt={id} style={{width:64 ,height: 64}}/> </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{birth}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
            <TableCell><CustomerDelete stateRefresh={stateRefresh} id={id}/></TableCell>
        </TableRow>
    )

});

export default Customer;