export function Componente(
  {
    children,
    userName='pordefecto',//valor de props por defecto,
    userId,//valor de props por defecto
    isbool,
    elemento,
    funcion

  }
  
  ){
  return(
    <article>
      <header>
        {userName}
        <h1>{userId}</h1>
      </header>
    
      <aside>
        <button>
          hola
        </button>
        {elemento}
        <h1>{children}</h1>
        <h1>{funcion}</h1>
      </aside>
    </article>
      
    
  )
}
