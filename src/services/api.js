import axios from 'axios';
import { now } from 'moment';


export const api = axios.create({

        baseURL: 'http://localhost:3001'
})

export const busca = async(url, setDado) =>{
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const removeItem = async(url, setStatus) =>{
    const resposta = await api.delete(url)
    setStatus('Deleted')
}

export const agendaItem = async(url, setStatus) =>{
    const resposta = await api.post(url, {
        status: 1,
        data: now(), user_id: 1, tatuador_id: 3, createdAt: now(), updatedAt: now()
    })
    // setStatus(1);
    console.log(resposta)
    // setStatus('Agendado')
    // e.preventdefault();
    // alert("Horario agendado com sucesso")
}

