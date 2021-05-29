import '../assets/css/Card.css'

export default function Card({character}) {
    return (
        <div className='card'>
            <img
                alt='profile' 
                src={character.image}
                className='img-profile'
            />
            <div className='info-container'>
                <div className='info-item'>
                    <strong>Nombre: </strong> {character.name}
                </div>
                <div className='info-item'>
                    <strong>Especie: </strong> {character.species}
                </div>
                <div className='info-item'>
                    <strong>Genero: </strong> {character.gender}
                </div>
                <div className='info-item'>
                    <strong>Estatus: </strong> 
                    <p
                        style={{display: 'inline', color: character.status === 'Alive' ? 'green' : character.status === 'Dead' ? 'tomato' : 'orange'}}
                    >
                        {character.status}
                    </p>
                </div>
                <div className='info-item'>
                    <strong>Primera vez visto: </strong> {character.origin.name}
                </div>
                <div className='info-item'>
                    <strong>Ultima vez visto: </strong> {character.location.name}
                </div>
            </div>
        </div>
    )
}
