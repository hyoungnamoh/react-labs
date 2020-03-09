import React, {memo} from 'react';
import {TableRow, TableCell} from "@material-ui/core";



const Customer = memo((props) => {
    return(
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt={props.id}/> </TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birth}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    )

});

export default Customer;