"use client"
import { useEffect, useState } from "react";
export default function CallbackMercadoPago() {

    const [status, setStatus] = useState<Boolean>(false);

    const getCode = async ()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        const response = await fetch(process.env.NEXT_PUBLIC_URL_FETCH+'/api/credentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code:code
            })
        });
        const data = await response.json();
        console.log(data);
        setStatus(data.success);
    }

    useEffect(() => {
        getCode();
    },[])
    
    return(
    <>
    {
        status ? 
        <h1>Integración con MercadoPago exitosa</h1> 
        : 
        <h1>Pagina no Disponible</h1>
    }
    </>
    )
}