let bt = document.getElementById('buttonR');
bt.onclick = register


/**
 * Funcion encargada de registrar usuario en la base de datos e inyectar informacion en mysql
 */
async function  register(){


    const user1 = document.getElementById('user').value;
    const pas = document.getElementById('password').value;



    const data = {

        user: user1,
        password: pas
    };

    try{
        //Consumimos un controlador
        const respuesta = await axios.post('http://localhost:3000/register', data);
        //enviamos peticion a la otra base de datos indicando que registramos usuarios
        const respuesta2 = await axios.post('http://localhost:8080/user', data);
       
       
        window.location="./index.html"
      }catch(e){  
        
        console.log(e); 
    }
    

}


