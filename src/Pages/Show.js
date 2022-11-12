import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {

    const {id} = useParams();
    const [show,setShow] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

        const isMounted = true;
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(response =>{
            if(isMounted){
                setShow(response)
                setIsLoading(false);    
            }
            
        })
        .catch(err =>{
            if(isMounted){
                setError(err.message);
            setIsLoading(false);
            }
        })

        return() =>{
            isMounted = false;
        }

    },[id])

    console.log(show)

    if(isLoading){
        return <div>Data is Loading</div>
    }
    
    if(error){
        return <div>Error has occured</div>
    }

  return (
    <div>
      This is show page
    </div>
  )
}

export default Show
