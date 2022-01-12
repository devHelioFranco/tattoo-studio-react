import axios from 'axios';


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
    const resposta = await api.post(url)
    setStatus('Agendado')
}

