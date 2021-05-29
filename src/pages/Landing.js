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
  const [characters, setCharacters] = useState([])
  const [listCharacters, setListCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [date] = useState(new Date())
  
  useEffect(() => {
    fetchCharacters()
  }, [])

  useEffect(() => {
    findCharacter()
  }, [name])
  
  const fetchCharacters = async (url = 'https://rickandmortyapi.com/api/character') => {
    try {
      setIsLoading(true)
      const response = await getCharacters(url)
      console.log(response.info)
      setInfo(response.info)
      setCharacters(response.results)
      setCharacters(response.results)
      setListCharacters(response.results)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const findCharacter = async () => {
    if(name === '') {
      setListCharacters(characters)
    } else {
        let result = characters.filter(character => character.name.toLowerCase().indexOf(name.toLowerCase()) > - 1);
        setListCharacters(result)
    }
  }

  const nextPage = async () => {
    try {
      if(info.next) await fetchCharacters(info.next)
    } catch (error) {
      console.log(error)
    }
  }

  const prevtPage = async () => {
    try {
      if(info.prev) await fetchCharacters(info.prev)
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <>
          <header className="App-header">
            <div style={{backgroundColor: 'whitesmoke', borderRadius: '50%', width: '50px', height: '50px'}}>
              <img src={logo} width='50' alt='logo' />
            </div>
            <div>
              Rick and Morty Web
            </div>
            <div>
              <input
                className='input-search' 
                placeholder='Buscar por nombre ..' 
                value={name} 
                onChange={e => setName(e.target.value)}
              />
            </div>
          </header>
          <section className="App-container">
            {listCharacters.length > 0 ? listCharacters.map(character => {
              return <Card key={character.id} character={character} />
            }) : <span>No hay nada que mostrar</span>}
          </section>
            {isLoading && <strong style={{marginBottom: '5px'}}>Cargando ..</strong>}
            <div className='pagination'>
              {
                info && info.prev && <div style={{marginBottom: 20, cursor: 'pointer'}} onClick={prevtPage}>
                {'<--'} Pagina anterior
                </div>
              }
              {
                info && info.next && <div style={{marginBottom: 20, cursor: 'pointer'}} onClick={nextPage}>
                Pagina siguiente {'-->'}
                </div>
              }
            </div>
          <footer className="App-footer">
            <small>
              Manuel Meneses &copy; {date.getFullYear()}
            </small>
          </footer>
      </>
  )
}
