import { useState } from "react"

const itemListContainer = () => {
    const [listaDeComrpas, setListaDeComrpas ] = useState([])


    return(
        <div>
            {listaDeComrpas.length > 0 ? (
                <>
                {listaDeComrpas.map(item => <p>{item}</p>)}
                </>
            ) : (
                <p>
                    No hay nada en el carrito!
                </p>
            )
            
            }
        </div>
    )
}

export default itemListContainer