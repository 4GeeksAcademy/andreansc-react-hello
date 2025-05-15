import React from 'react'

const Cards = ({titulo, imagen, text}) => {
  let styleDiv = {
    width: "18rem"

  }
  return (
   
      <div className="card mb-4" style={styleDiv} >
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{text}</p>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">Find out more!</a>
          </div>
        </div>
      </div>
    
  )
}

export default Cards