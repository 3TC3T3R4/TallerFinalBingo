
let bt2 = document.getElementById('login');
bt2.onclick = lobby


/**
 * Funcion encargada de obtener los valores ingresados en el login e inyetar los usuarios en la
 * base de datos 
 */
async function  lobby(){


    const user1 = document.getElementById('user').value;
    const pas = document.getElementById('password').value;


    const data = {

        user: user1,
        password: pas
    }

    try{
   
        //Consumimos el controlador para llenar la base de datos con jugadores
        const respuesta = await axios.post('http://localhost:3000/lobby', data);
       
       
        window.location='./lobby.html';
        
    
    }catch(e){  
        window.alert('USUARIO NO EXISTE')
        console.log(e); 
    }
    

}
