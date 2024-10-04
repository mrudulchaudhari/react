import ProfilePicture from './assets/profilepic.jpg'

function Card(){
    return(
        <div className = "card">
            <img className= "card-image" src={ProfilePicture} 
            alt="Profile Picture"
             />
            <h2 className='card-title'>Mrudul Chaudhari</h2>
            <p className='card-text'>I code for passion.</p>
        </div>
    )
}

export default Card