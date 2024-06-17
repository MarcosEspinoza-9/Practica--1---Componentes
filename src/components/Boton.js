import React, { useState } from 'react';

function ClickBoton() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Diste Click {contador} veces en el botón</p>
      <button onClick={() => setContador(contador + 1)} 
       style={{ 
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
        }}
        >
        Click me
      </button>
    </div>
  );
}

export default ClickBoton;
