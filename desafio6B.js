let productos = [
    {nombre:"Playstation 5", precio: 180000},
    {nombre:"Xbox series x", precio: 180000},
    {nombre:"Xbox series s", precio: 90000},
    {nombre:"Nintendo Switch Lite", precio: 65000},
    {nombre:"Nintendo Switch Oled", precio: 75000},
    {nombre:"Xbox One", precio: 45000},
    {nombre:"Playstation 4", precio: 45000},
    {nombre:"Playstation 3", precio: 25000},
    {nombre:"Xbox 360", precio: 22000},
    {nombre:"Nintendo Wii U", precio: 30000},
]

productos.sort((a,b)=>{
    if(a.precio < b.precio){
        return 1;
    }
    if(a.precio > b.precio){
        return -1
    }
    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
        return 1;
    }
    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
        return -1
    }

})

console.log(productos);