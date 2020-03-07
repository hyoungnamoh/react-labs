import React, {useReducer, createContext, useMemo, useEffect, memo} from 'react';

const Detail = (props) => {
    console.log(props);
    const {location, history} = props;
    useEffect(() => {
        if(location.state === undefined){
            history.push("/");
        }
    }, []);

    return (
        <div>
            Heloo
        </div>
    )
}

export default Detail;