
let bt3 = document.getElementById('users');
bt3.onclick = getusers

/**
 * Funcion encargada de  obtener y mostrar los usuarios creados 
 */
async function getusers(){
  
  bt3.style.backgroundColor = 'gray';
  bt3.disabled = false;


    try{
      
      
      const dataone = document.getElementById('user');
      //consumimos con una peticion get el controlador y mongo
      const respuesta = await axios.get(`http://localhost:3000/users`);
      


      const array = respuesta.data.game;
      
    
      for (let i = 0; i < array.length; i++) {
        
       let arraynames = array[i].user;

        console.log(arraynames);  
        
        dataone.innerText +=JSON.stringify(arraynames)+"\n";
     
      }
      

    }catch(e){
    console.log(e); 
  }
  
  }