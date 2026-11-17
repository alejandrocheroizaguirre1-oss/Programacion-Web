function Hijo({nombre}){
    return <h3>Hola {nombre}</h3>
}

function Intermeidio({nombre}){
    return <Hijo nombre={nombre}/>
}

export default function Padre(){
    return <Intermeidio nombre="Ben"/>
}