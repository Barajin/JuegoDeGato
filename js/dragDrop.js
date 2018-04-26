		var tablero = new Array(9);
    var fotoid;


    function asignarjugador(fotoid){
      var tipojugador;
      if(fotoid==="equis"){
        vartipojugador=0;
        jugadorX();
      }else if(fotoid==="circulo")
      vartipojugador=0;
      jugadorO();
    }



	function drop(ev){

			ev.preventDefault();
			var data=ev.dataTransfer.getData("text");
			ev.target.appendChild(document.getElementById(data))
			var elemento=ev.target.id;	
			console.log(elemento);
      var fotoid=asignarjugador();
      console.log(fotoid);
      if(fotoid=="equis"){
        tablero[elemento]=0;
      }else if(fotoid=="circulo")
      tablero[elemento]=1;
     
				
		}
		function allowDrop(ev){
			ev.preventDefault();
		}
		function drag(ev){
			ev.dataTransfer.setData("text",ev.target.id);
      var fotoid=ev.target.id; 
      asignarjugador(fotoid);
      console.log(fotoid); 
		}

function jugadorX(){
        //para el jugador X
        if(tablero[1]==1 && tablero[2]==1 && tablero[3]==1){//primer linea horizontal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[4]==1 && tablero[5]==1 && tablero[6]==1){//segunda linea horizontal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[7]==1 && tablero[8]==1 && tablero[9]==1){//tercera linea horizontal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[1]==1 && tablero[5]==1 &&tablero[9]==1){//primera linea diagonal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[3]==1 && tablero[5]==1 &&tablero[7]==1){//segunda linea diagonal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[1]==1 && tablero[4]==1 &&tablero[7]==1){//primer linea vertical izquierda
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[2]==1 && tablero[5]==1 &&tablero[8]==1){//linea de enmedio vertical
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[3]==1 && tablero[6]==1 &&tablero[9]==1){//tercer linea vertical derecha
          alert("Felicidades Jugador X Ganaste");
        }
                }
                // para el jugador 2
               function jugadorO(){
        if(tablero[1]==0 && tablero[2]==0 && tablero[3]==0){//primer linea horizontal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[4]==0 && tablero[5]==0 && tablero[6]==0){//segunda linea horizontal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[7]==0 && tablero[8]==0 && tablero[9]==0){//tercera linea horizontal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[1]==0 && tablero[5]==0 &&tablero[9]==0){//primera linea diagonal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[3]==0 && tablero[5]==0 &&tablero[7]==0){//segunda linea diagonal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[1]==0 && tablero[4]==0 &&tablero[7]==0){//primer linea vertical izquierda
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[2]==0 && tablero[5]==0 &&tablero[8]==0){//linea de enmedio vertical
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[3]==0 && tablero[6]==0 &&tablero[9]==0){//tercer linea vertical derecha
          alert("Felicidades JugadorO Ganaste");
        }
               }
