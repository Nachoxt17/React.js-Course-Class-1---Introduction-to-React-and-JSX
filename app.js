/**(1)-Esto que haremos a continuación aquí abajo es Insertar Código HTML Usando Jquery, lo que nos ahorró tenerlo que escribir con Javascript PURO así:_
 * 
 * const elemntExample = document.createElement('h1');
 * elemntExample.setAttribute('id', 'title');
 * elemntExample.textContent = 'Introduction to React and JSX';
 * document.getElementById('titleContainer').appendChild(elemntExample);
 * 
 * +-Como se puede ver, quedaría mucho más largo y complicado.
*/

$("#titleContainer").html("<h1 class='h1' id='title'>Introduction to React and JSX.</h1>");

/**(2)-Ahora Haremos lo Mismo pero con Javascript usandoReact.js y se verá reflejado también en la Página Web:_.*/

const elemntExample1 = React.createElement('h2', {id: 'subtitle'}, 'The Previous Title was made With JQuery, and this Subtitle is made with React.JS .');
/**  Creamos una Constante Igual que en Javascript CON LA DIFERENCIA en qué usamos un Método/Función Predefinida de React.js llamado:_
 * 
 *  React.createElement( '*typeOfElement*', {*elementAttribute: 'attributeValue'*}, '*Element Child or Content.*');
 * +-Entre cuyos Paréntesis se Escriben como Parámetros y en este Orden:_ El Tipo de Elemento entre Comillas(Ej:_ 'h2'), los Atributos del Elemento y sus Valores en Notación de Objeto de Javascript
 * (Ej:_ {id: 'subtitle'}) con la Opción de Poner "null" si el Elemento no posee ningún Atributo y en 3er Lugar el Contenido del Elemento entre Comillas(Ej:_ 'This is a Text').*/

ReactDOM.render( elemntExample1, document.getElementById('subtitleContainer'));
/** Ahora para Proyectar Nuestro Elemento HTML Creado con React en el DOM(Document Object Model) que es Básicamente el Archivo HTML Usamos el Método/Función Predefinida de React.js llamado:_
 * 
 * ReactDOM.render(elementToRender, elementInWichRender);
 * 
 * que toma como Primer Parámetro el Elemento a Renderizar y como Segundo Parámetro el Elemento dentro del cuál se Renderizará el Primero, para poder verlo Reflejado en Nuestra Página Web.*/

 /**(3)-Ahora haremos lo mismo usando el Lenguaje JSX que es una Extensión de Javascript (Como lo es SASS de CSS) que mezcla Javascript con HTML creada Específicamente para ser usada en React.JS 
  * y simplificar su Código. Antes de Poder usar JSX debemos Permitir que nuestro Archivo "app.js" o el Archivo .js que tengamos COMPILE JSX ya que éste no viene con esa opción por Defecto, para eso usamos el
  *  Programa Prepros 7 en el que Seleccionamos a Archivo "app.js" y le marcamos la Configuración de "Transpile with Babel", lo que va a crear un Nuevo Archivo Llamado "app-dist.js" en la misma Carpeta que el 
  * Archivo "app.js" y por el Cual se PreProcesará el Código JSX por lo cual ahora debemos llamar a "app-dist.js" en vez de a "app.js" desde Nuestro HTML, ya que ahora la Lógica Provrendrá de Allí.
  * Una vez hecho esto podremos escribir JSX Normalmente. NOTA:_ Todo lo que se ponga entre Corchetes "{...}" en JSX será interpretado como Javascript Normal y las Clases de los Elementos en JSX se 
  * escribe "className='***'" en vez de solo "class='***'". NO se pueden poner varios Elementos HTML/JSX en una misma constante/variable, en todo caso se puede Poner 1 Elemento que sea Contenedor de Otros Varios
  * Elementos dentro de él. Si se quieren escribir varias Líneas, poner todo el Contenido de la constante/variable dentro de Paréntesis "(...)".*/

const elemntExample2 = (
  <div>
  <h3 className="p1" id="firstText">This is a Text made with JSX and I'm I {9.5 + 9.5} Years Old.</h3>
  <h3>To View the Contents of this First Class, go to the File "app.js" of this Repository.</h3>
  </div>);

ReactDOM.render( elemntExample2, document.getElementById('text1'));

/**(4)-Los Elementos de React.js son como los Fotogramas de Una Película; una vez establecidos tienen un Estado Fijo que no cambia, y para modificarlos deberíamos Editarlos y Volverlos a Renderizar. Para ver mejor
 * eso vamos a hacer 2 Relojes, El 1ro con Javascript Puro y el 2do usando React.js.*/

//+-1º Reloj con Javascript PURO:_
const wJS = document.getElementById('watch1');
function watchJS() {
  wJS.textContent = new Date().toLocaleTimeString();
  console.log(wJS.textContent);
}
setInterval(watchJS, 1000);
/**+- window.setInterval(código, intervaloDeTiempo); Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.*/

//+-2º Reloj con React.js y JSX:_
const wRC = document.getElementById('watch2');
function watchRC() {
  let now = new Date().toLocaleTimeString();
  const el = <span>{now}</span>;
  console.log(now);
  ReactDOM.render(el, wRC);
}
setInterval(watchRC, 1000);
/**+- window.setInterval(código, intervaloDeTiempo); Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.*/