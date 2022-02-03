import logo from './logo.svg';
import './App.css';
import Description from './Description';
// ENTRE LLAVES SE EVALUA LO QUE LE PASES YA SEAN VATIABELS
//SALTO DE LINEA CON <BR \>
// SACAS EL TIMESTAMP VALUE {+new Date()}
//LAS FUNCIONES QUE CREAN COMPONENTES SON MAS USADAS

//Crear un componente 
function Mensaje (){
 return(
  <h1>creacion de compoente</h1>

 );
}


function App() {
const a = 5
const b= 7
const mensaje = "Hola mundo"
  return (
    <div className="App">
   <h1> TITULO DE LA App </h1>
<strong>TRABAJADO EN ELLO </strong>

      <Mensaje />
      <Description color = "blue " mensaje ="Trabajando viejillo"></Description>
      <Description color = "black " mensaje =" viejillo"></Description>

<p> El resultado es :</p>
      {a+b}
    <br />
      {mensaje + "  " + 'SISTEMA JSX'}
     
   
    </div>
  );
}

export default App;
