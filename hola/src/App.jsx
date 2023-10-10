import { Componente } from "./Componente.jsx"
import { useState } from "react"
export function App(){
  /*desestructuracion*/
  
  //a las props se le pueden pasar elementos html asi como funciones
  const elementohtml = <h2>elemento1</h2>
  const funcion= ()=>2
  return(
    <div>
      <Componente 
        userId='asdf'
        elemento={elementohtml}
        funcion={funcion}

      >
        Soy el children
      </Componente>
    </div>
  )
}
