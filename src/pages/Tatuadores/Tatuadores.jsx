import React from 'react'
import ListaTatuadores from '../../components/FormTatuadores/Tatuadores'
import './tatuadores.css'

const Tatuadores = () =>{
    return(
        <main>
            <div>
                <h1 className="titulo">Tatuadores</h1>
                <ListaTatuadores url={'/tatuadores'} />
            </div>
        </main>
    )
}

export default Tatuadores