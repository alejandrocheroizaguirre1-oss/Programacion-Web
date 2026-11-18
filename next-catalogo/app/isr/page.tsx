export const dynamic = 'force-static';

export const revalidate = 10; //Revalidar cada 10 sengundos

export default function ISRPage(){
    return <main>
        <h1>ISR: Contenido actualizado</h1>
        <p>Esta pagina se prepara al construir el proyecto con tu querido profesor</p>
        <p>Descarga</p>
    </main>
}