import '../assets/css/Card.css'

export default function Card({character}) {
    return (
        <div className='card'>
            <img 
                src={character.image} 
                width='220'
                 style={{borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px'}} 
            />
            <div className='info-container'>
                {character.name}
            </div>
        </div>
    )
}
