import { useEffect, useState } from "react";

import { getGifs } from '../helpers/getGifs'


// Custom hooks funcionan como Functional Components
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ( ) => {

        getGifs( category )
            .then( imgs => {
                setState({
                    data:imgs,
                    loading: false
                });
                
            })

    }, [ category ] )

    return state;
}