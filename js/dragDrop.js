		var tablero = new Array(9);
    var fotoid;


    function asignarjugador(fotoid){
      var tipojugador;
      if(fotoid==="equis"){
        vartipojugador=1;
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
      //var fotoid=asignarjugador(elemento);
      //console.log(fotoid);
      if(fotoid=="equis"){
        tablero[elemento]="equis";
      }else if(fotoid=="circulo")
      tablero[elemento]="circulo";
      console.log(tablero[0]);
      jugadorX();
      jugadorO()
      
		}
		function allowDrop(ev){
			ev.preventDefault();
		}
		function drag(ev){
			ev.dataTransfer.setData("text",ev.target.id);
      fotoid=ev.target.id; 
      asignarjugador(fotoid);
      console.log(fotoid); 
    }
    /*
function jx(){
  var contador_x=0;
  var contador_o=0;
  for(var i=0;i<tablero.length;i++){
      if(tablero[i]==0){
          contador_x++;
          contador_o=0;
          if(contador_x===3){
            alert("Felicidades Jugador X Ganaste");
          }
      }else if(tablero[i]==1){
        if(tablero[i]==1){
          contador_o++;
          contador_x=0;
          if(contador_x===3){
            alert("Felicidades Jugador X Ganaste");
          }
      }
  }
}
}*/
function jugadorX(){
        //para el jugador X
        if(tablero[0]=="equis" && tablero[1]=="equis" && tablero[2]=="equis"){//primer linea horizontal
          alert("Felicidades Jugador X Ganaste");
          console.log("prueba");  
        }else if(tablero[3]=="equis" && tablero[4]=="equis" && tablero[5]=="equis"){//segunda linea horizontal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[6]=="equis" && tablero[7]=="equis" && tablero[8]=="equis"){//tercera linea horizontal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[1-1]=="equis" && tablero[5-1]=="equis" &&tablero[9-1]=="equis"){//primera linea diagonal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[3-1]=="equis" && tablero[5-1]=="equis" &&tablero[7-1]=="equis"){//segunda linea diagonal
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[1-1]=="equis" && tablero[4-1]=="equis" &&tablero[7-1]=="equis"){//primer linea vertical izquierda
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[2-1]=="equis" && tablero[5-1]=="equis" &&tablero[8-1]=="equis"){//linea de enmedio vertical
          alert("Felicidades Jugador X Ganaste");
        }else if(tablero[3-1]=="equis" && tablero[6-1]=="equis" &&tablero[9-1]=="equis"){//tercer linea vertical derecha
          alert("Felicidades Jugador X Ganaste");
        }
                }
                // para el jugador 2
               function jugadorO(){
        if(tablero[0]=="circulo" && tablero[1]=="circulo" && tablero[2]=="circulo"){//primer linea horizontal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[3]=="circulo" && tablero[4]=="circulo" && tablero[5]=="circulo"){//segunda linea horizontal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[6]=="circulo" && tablero[7]=="circulo"&& tablero[8]=="circulo"){//tercera linea horizontal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[0]=="circulo" && tablero[4]=="circulo" &&tablero[8]=="circulo"){//primera linea diagonal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[3]=="circulo" && tablero[5]=="circulo" &&tablero[6]=="circulo"){//segunda linea diagonal
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[0]=="circulo" && tablero[3]=="circulo" &&tablero[6]=="circulo"){//primer linea vertical izquierda
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[1]=="circulo" && tablero[4]=="circulo" &&tablero[7]=="circulo"){//linea de enmedio vertical
          alert("Felicidades JugadorO Ganaste");
        }else if(tablero[2]=="circulo" && tablero[5 ]=="circulo" &&tablero[8]=="circulo"){//tercer linea vertical derecha
          alert("Felicidades JugadorO Ganaste");
        }
    }
