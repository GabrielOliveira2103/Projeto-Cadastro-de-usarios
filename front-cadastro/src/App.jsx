
import './App.css'
import { useState, useEffect } from 'react'
import UserCard from './components/userCard.jsx'
import axios from 'axios'

function App() {

  const [name, setname] = useState('Gabriel')
  const [email, setemail] = useState('gabriel@example.com')
  const [age, setage] = useState(25)
  const [users, setusers] = useState([])

  async function buscarUsuarios() {

    const resposta = await axios.get('https://gabrieloliveiradev.com/usuarios')

    setusers(resposta.data)

  }
  useEffect(() => {

    buscarUsuarios()


  }



    , [])





  async function handleSubmit(event) {
    event.preventDefault()


    await axios.post('https://gabrieloliveiradev.com/usuarios', {
      name: name,
      email,
      age: Number(age)
    })

    await buscarUsuarios()

  }



  return (
    <>




      <div className='app'>

        <h1>Cadastro De Usuários</h1>


        <form onSubmit={handleSubmit} >

          <input placeholder='Nome'
            type='text'
            value={name}
            onChange={event => setname(event.target.value)}


          ></input>

          <input placeholder='Email'
            type='email'
            value={email}
            onChange={event => setemail(event.target.value)}


          ></input>

          <input placeholder='Idade'
            type='number'
            value={age}
            onChange={event => setage(event.target.value)}


          ></input>

          <button type='submit'>Cadastrar</button>

        </form>

        <div className='user-list'>

          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}


        </div>

      </div>
    </>
  )
}

export default App
