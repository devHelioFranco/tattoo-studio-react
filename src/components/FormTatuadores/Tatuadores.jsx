import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { busca } from '../../api/api'


const ListaTatuadores = ({ url }) => {


const [tatuadores, setTatuadores] = useState([])


useEffect(() => {
    busca(url, setTatuadores )

},[])


    return(
        <section className="posts container" > 
            { 
            tatuadores.map((post) => (
                <Link className={`cartao-post `} to={`/posts/${post.id}`}>
                    <article key={post.id}>
                        <h3 className="cartao-post__titulo">
                            {post.nome}
                        </h3>
                        <p className="cartao-post__meta">Descrição: {post.descricao}</p>
                        <p className="cartao-post__meta">Especialidade: {post.especialidade}</p>

                    </article>
                </Link>
            ))
            }
        </section>
    )
}

export default ListaTatuadores