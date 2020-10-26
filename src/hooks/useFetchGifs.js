import { useState } from "react"


// Custom hooks funcionan como Functional Components
export const useFetchGifs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        setState({
            data: [1,2,3,4,5,6,7],
            loading: false
        })
    }, 3000);

    return state;
}