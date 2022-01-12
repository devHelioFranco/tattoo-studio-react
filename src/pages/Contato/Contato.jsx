import React from 'react';
import Caio from '../../assets/caio.jpeg';
import Evelyn from '../../assets/evelyn.jpeg';
import Helio from '../../assets/helio.jpeg';
import Hyan from '../../assets/hyan.jpeg';
import Mariana from '../../assets/mariana.jpeg';
import style from './style.css';


const Contato = () =>{
    return(
        <section className="grid">
            <div>
                <h1 className='tituloGrid'>Caio</h1>
                <img
                    src={Caio}
                    className='cardImagem'
                    />
                <h3><a href='https://www.linkedin.com/in/caio-cavalcanti-17b50b13a/'>Linkdin</a></h3>
                <h3><a href='https://github.com/CaioSix'>Github</a></h3>   
            </div>
            <div className='card'>
                <h1 className='tituloGrid'>Evelyn</h1>
                <img
                    src={Evelyn}
                    className='cardImagem'
                    />
                <h3><a href='https://www.linkedin.com/in/evelynbalves/'>Linkdin</a></h3>
                <h3><a href='https://github.com/evelynsba'>Github</a></h3>        
            </div>
            <div className='card'>
                <h1 className='tituloGrid'>Helio</h1>
                <img
                    src={Helio}
                    className='cardImagem'
                    />
                <h3><a href='https://www.linkedin.com/in/dev-heliofranco/'>Linkdin</a></h3>
                <h3><a href='https://github.com/devHelioFranco'>Github</a></h3>    
            </div>
            <div className='card'>        
                <h1 className='tituloGrid'>Hyan</h1>
                <img
                    src={Hyan}
                    className='cardImagem'
                    />
                <h3><a href='https://www.linkedin.com/in/hyan-araujo-55a9891b2/'>Linkdin</a></h3>
                <h3><a href='https://github.com/B34tdb'>Github</a></h3>    
            </div>
                <div className='card'>
                <h1 className='tituloGrid'>Mariana</h1>
                <img
                    src={Mariana}
                    className='cardImagem'
                    />
                <h3><a href='https://www.linkedin.com/in/mariana-cristina-santos/'>Linkdin</a></h3>
                <h3><a href='https://github.com/mariana-cristina-santos'>Github</a></h3>   
            </div>
        </section>
    )
}

export default Contato