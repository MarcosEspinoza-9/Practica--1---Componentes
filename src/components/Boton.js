import React, { useState } from 'react';

function ClickBoton() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Diste Click {contador} veces en el botón</p>
      <button onClick={() => setContador(contador + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ClickBoton;
