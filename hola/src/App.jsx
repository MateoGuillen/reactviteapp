import { Componente } from "./Componente.jsx"
export function App(){
  //a las props se le pueden pasar elementos html asi como funciones
  const elementohtml = <h2>elemento1</h2>
  const funcion= ()=>2
  return(
    <div>
      <Componente 
        userId='HOLAXD'
        elemento={elementohtml}
        funcion={funcion}

      >
        Soy el children
      </Componente>
    </div>
  )
}
