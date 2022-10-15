import { useState } from 'react';

function Card({name, imgUrl}){
    const [text, setText] = useState("Some quick example text to build on the card title and make up the bulk of the card's content.")
    return(
        <>
            <div className="card mx-4" style={{width: "18rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <a href="#" onClick={() => setText("You have Click button! of "+ name)} className="btn btn-primary">Click to Change Text</a>
            </div>
            </div>
        </>
    )
}

export default Card