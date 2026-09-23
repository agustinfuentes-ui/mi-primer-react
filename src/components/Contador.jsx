import { useState } from "react"
import Button from "react-bootstrap/Button"


function Contador() {
    const [contador,setContador] = useState(0)

    return(
        <div>
            <hr />
            <h2>Contador: {contador}</h2>
            {/*() se refiere al useState(n)*/}
            <button onClick={()=>setContador(contador+1)}>
                Aumentar
            </button>
            <Button onClick={()=>setContador(contador*0)} variant="warning">
                Resetear
            </Button>
        </div>
    )
}



export default Contador