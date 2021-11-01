import React, { useEffect, useState } from "react";
import HeaderResponsive from "../../components/HeaderResponsive";
import api from '../../Api';


function Personagens(){
    const [data, setData] = useState(null);
    useEffect( () => {
        async function loadAll(){
            let res = await api.getPersonagemByName() ;
            setData(res.data);
            console.log(data);
        }
        loadAll();
    }, [data]);
    

    return (
        <div>
            <HeaderResponsive/>
        </div>
    );
}

export default Personagens;