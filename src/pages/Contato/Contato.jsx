import React from 'react';
import Caio from '../../assets/caio.jpeg';
import Evelyn from '../../assets/evelyn.jpeg';
import Helio from '../../assets/helio.jpeg';
import Hyan from '../../assets/hyan.jpeg';
import Mariana from '../../assets/mariana.jpg';
import  './contato.css';


const Contato = () =>{
    return(
        <section className="grid">
            <div className='tatuadores'>
                <h1 className='tituloGrid'>Caio</h1>
                <img
                    src={Caio}
                    className='cardImagem'
                    />
                <h3><a href='#'>Linkdin</a></h3>
                <h3><a href='#'>Github</a></h3>   
            </div>
            <div className='card'>
                <h1 className='tituloGrid'>Evelyn</h1>
                <img
                    src={Evelyn}
                    className='cardImagem'
                    />
                <h3><a href='https://www.linkedin.com/in/evelynbalves/'>Linkdin</a></h3>
                <h3><a href='#'>Github</a></h3>        
            </div>
            <div className='card'>
                <h1 className='tituloGrid'>Helio</h1>
                <img
                    src={Helio}
                    className='cardImagem'
                    />
                <h3><a href='#'>Linkdin</a></h3>
                <h3><a href='#'>Github</a></h3>    
            </div>
            <div className='card'>        
                <h1 className='tituloGrid'>Hyan</h1>
                <img
                    src={Hyan}
                    className='cardImagem'
                    />
                <h3><a href='#'>Linkdin</a></h3>
                <h3><a href='#'>Github</a></h3>    
            </div>
                <div className='card'>
                <h1 className='tituloGrid'>Mariana</h1>
                <img
                    src={Mariana}
                    className='cardImagem'
                    />
                <h3><a href='#'>Linkdin</a></h3>
                <h3><a href='#'>Github</a></h3>   
            </div>
        </section>
    )
}

export default Contato