let bt5 = document.getElementById('buttonstart');
bt5.onclick = startgame

/**
 * Fucion encargada de inyectar 1 juega a my sql utilizando una peticion y direccionamiento 
 * a la siguiente pargina para comenzar a jugar
 */
async function  startgame(){
   
    const balot =  document.getElementById('loadgame');
    
    balot.innerText = JSON.stringify("JUEGO EN PROCESO EMPEZAREMOS EN 30 SEGUNDOS");

        try{
       
            const respuesta = await axios.post('http://localhost:8080/game');
           
        
        }catch(e){  
            
            console.log(e); 
            
        }
        
    

    setInterval(function(){

        
     window.location='./playzone.html';

    },1000*15);



}
