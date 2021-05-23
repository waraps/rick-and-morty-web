import {useState, useEffect} from 'react'
import '../App.css'

// Images
import logo from '../assets/img/logo.png'

// API
import getCharacters from '../api/index'

// Components
import Card from '../components/Card'

export default function Landing() {
  const [info, setInfo] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [date] = useState(new Date())
  
  useEffect(() => {
      fetchCharacters()
    }, [])
  
  const fetchCharacters = async () => {
    try {
      const response = await getCharacters()
      setInfo(response.info)
      setCharacters(response.results)
    } catch (error) {
      console.log(error)
    }
  }
  return (
      <>
          <header className="App-header">
            <div style={{backgroundColor: 'whitesmoke', borderRadius: '50%', width: '50px', height: '50px'}}>
              <img src={logo} width='50' />
            </div>
            <div>
              Rick and Morty Web
            </div>
            <div>
              <input placeholder='Buscar por nombre ..' />
            </div>
          </header>
          <section className="App-container">
            {characters ? characters.map(character => {
              return <Card character={character} />
            }) : <span>No hay nada que mostrar</span>}
          </section>
          <footer className="App-footer">
            <small>
              Manuel Meneses &copy; {date.getFullYear()}
            </small>
          </footer>
      </>
  )
}
