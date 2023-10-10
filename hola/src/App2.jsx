import { Componente } from "./Componente.jsx"
import { useState } from "react"
export function App2(){
  /*desestructuracion*/
  
  //a las props se le pueden pasar elementos html asi como funciones
  const elementohtml = <h2>elemento1</h2>
  const funcion= ()=>2
  const users = [
    {id:'1',username:'mateo'},
    {id:'2',username:'seichi'},
    {id:'3',username:'mauro'}
  ]
  return(
    <div>
      {/**desestructuracion {id,username}*/}
      {users.map( ( {id,username} ) => {

        return(
            <Componente
              userName={username}
              userId={id}
              key={id}
            >
            </Componente>
        )
        
      }
        
      

      )}
    </div>
  )
}
