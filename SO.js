var sistemas=[];
sistemas["subamortiguado"]="sub.png";
sistemas["sobreamortiguado"]="sobre.png";
sistemas["critamortiguado"]="crit.png";
sistemas["sinamortiguado"]="sin.png";

class sistemas_so
{
    constructor(nombre)
    {
        this.nombre=nombre;
        this.imagen=new Image();
        this.imagen.src=sistemas[this.nombre]
    }
}
var a= document.getElementById("input_a");
var b= document.getElementById("input_b");
var c= document.getElementById("input_c");


var boton=document.getElementById("boton");
var controlador_js=document.getElementById("controlador");

var b0=0.0;
var r=document.getElementById("resultado");
var im=document.getElementById("imagen_res");
var wc=0.0;
var w=0.0;
var ro=0.0;
var tipo


function calcular(){

    a.value=parseFloat(a.value);
    b.value=parseFloat(b.value);
    c.value=parseFloat(c.value);


    if (a.value > 0 && c.value >= 0)
    {
        console.log(a.value);
        k= a.value/c.value;
        w= Math.sqrt(c.value);
        ro=b.value/(2*w);

        if (ro==0)
        {
            tipo="Sin amortiguar/ Undamped";
            im.innerHTML="<img class='res_fig' src='./sin.png'/>";
        }
        else if (ro>0 && ro< 1)
        {
            tipo="Subamortiguado/ Underdamped";
            im.innerHTML="<img class='res_fig' src='./sub.png'/>";
        }
        else if (ro==1)
        {
            tipo="Criticamente amortiguado/ Critically damped";
            im.innerHTML="<img class='res_fig' src='./crit.png'/>";
        }
        else if (ro>1)
        {
            tipo="Sobre amortiguado/ Overdamped";
            im.innerHTML="<img class='res_fig' src='./sobre.png'/>";
        }
        else
        {
            tipo="error determinando el tipo de sistema";
        }

        r.innerHTML="La funcion de transferencia corresponde a un sistema "+"<br/>"+tipo +"<br/>"+ "k= "+ k.toFixed(2)+"<br/>"+ "ro= "+ ro.toFixed(2) ;
        
        

    }
    else
    {   
        r.innerHTML="Error de parametros";
    }

}


boton.addEventListener("click",calcular);