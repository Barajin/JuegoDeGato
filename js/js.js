    var turno = "X";  
    var turno2= "O";
    var opciones = new Array(9);
    function marcar(id){    
      

      bandera++;
      jugadorX();
      jugadorO();
    } 
 
    function jugadorX(){
        //para el jugador X
        if(opciones[1]==1 && opciones[2]==1 && opciones[3]==1){//primer linea horizontal
          alert("Felicidades Jugador " +turno+ " Ganaste");
        }else if(opciones[4]==1 && opciones[5]==1 && opciones[6]==1){//segunda linea horizontal
          alert("Felicidades Jugador " +turno+ " Ganaste");
        }else if(opciones[7]==1 && opciones[8]==1 && opciones[9]==1){//tercera linea horizontal
          alert("Felicidades Jugador " +turno+ " Ganaste");
        }else if(opciones[1]==1 && opciones[5]==1 &&opciones[9]==1){//primera linea diagonal
          alert("Felicidades Jugador " +turno+ " Ganaste");
        }else if(opciones[3]==1 && opciones[5]==1 &&opciones[7]==1){//segunda linea diagonal
          alert("Felicidades Jugador " +turno+ " Ganaste");
        }else if(opciones[1]==1 && opciones[4]==1 &&opciones[7]==1){//primer linea vertical izquierda
          alert("Felicidades Jugador " +turno+ " Ganaste");
        }else if(opciones[2]==1 && opciones[5]==1 &&opciones[8]==1){//linea de enmedio vertical
          alert("Felicidades Jugador " +turno+ " Ganaste");
        }else if(opciones[3]==1 && opciones[6]==1 &&opciones[9]==1){//tercer linea vertical derecha
          alert("Felicidades Jugador " +turno+ " Ganaste");
        }
    }
                // para el jugador 2
    function jugadorO(){
        if(opciones[1]==0 && opciones[2]==0 && opciones[3]==0){//primer linea horizontal
          alert("Felicidades Jugador " +turno2+ " Ganaste");
        }else if(opciones[4]==0 && opciones[5]==0 && opciones[6]==0){//segunda linea horizontal
          alert("Felicidades Jugador " +turno2+ " Ganaste");
        }else if(opciones[7]==0 && opciones[8]==0 && opciones[9]==0){//tercera linea horizontal
          alert("Felicidades Jugador " +turno2+ " Ganaste");
        }else if(opciones[1]==0 && opciones[5]==0 &&opciones[9]==0){//primera linea diagonal
          alert("Felicidades Jugador " +turno2+ " Ganaste");
        }else if(opciones[3]==0 && opciones[5]==0 &&opciones[7]==0){//segunda linea diagonal
          alert("Felicidades Jugador " +turno2+ " Ganaste");
        }else if(opciones[1]==0 && opciones[4]==0 &&opciones[7]==0){//primer linea vertical izquierda
          alert("Felicidades Jugador " +turno2+ " Ganaste");
        }else if(opciones[2]==0 && opciones[5]==0 &&opciones[8]==0){//linea de enmedio vertical
          alert("Felicidades Jugador " +turno2+ " Ganaste");
        }else if(opciones[3]==0 && opciones[6]==0 &&opciones[9]==0){//tercer linea vertical derecha
          alert("Felicidades Jugador " +turno2+ " Ganaste");
        }
    }
                // funcion para reiniciar el juego
     function reiniciar(){
        location.reload();
      }