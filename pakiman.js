class Pakiman { //se crea una clase para asignar las caracteristicas de cada pakiman (imagen, nombre, vida, ataque, tipo)
  constructor(nombre, vida, ataque)
  {
      this.imagen = new Image();
      this.nombre = nombre;
      this.vida = vida;
      this.ataque = ataque;
      this.tipo  = "tierra";

      this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong> </br >");
    document.write("Vida: " + this.vida + " <br />");
    document.write("Ataque: " + this.ataque + "<hr />");
    document.write("</p>");
  }
}
