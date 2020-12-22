import Axios from 'axios';
import React, { useEffect, useState } from 'react';


//*-----------------------
//?custome Hook
const useResources = (resourceName) => {
    const [resources, setResources] = useState([])

    const fetchResources = async (x) => {
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/${x}`);

        setResources(response.data);
    }

    useEffect(() => {
        fetchResources(resourceName)
    }, [resourceName]);


    return resources;
}

export default useResources;
//*-----------------------------