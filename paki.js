var imagenes = [];// crear un array
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


var coleccion = []; // se ocupa esto para crear una array

coleccion.push(new Pakiman ("Cauchin", 100, 30));
coleccion.push(new Pakiman ("Pokacho", 80, 50));
coleccion.push(new Pakiman ("Tocinauro", 120, 40));

for (var pakin of coleccion)//se puede ocupar el in o el on (in para mostrar indice [la posicion ]) (on para mostrar la instancia [el objeto])
{
  pakin.mostrar();
}
