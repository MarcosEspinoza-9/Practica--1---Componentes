import React from 'react'

function Imagen(props) {
    const { url, descripcion, style } = props;
    return <img src={url}  alt={descripcion}  style= {style}/>
}

export default Imagen;