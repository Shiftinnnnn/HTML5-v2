class Busqueda{
    constructor(){
        this.paises = [
            {País: "Camerún", Continente:"África", id: "1"},
            {País: "Marruecos", Continente:"África", id : "2"},
            {País: "Costa de Marfil", Continente:"África", id: "3"},
            {País: "Egipto", Continente:"África", id: "4"},
            {País: "Estados Unidos", Continente:"América del Norte", id: "5"},
            {País: "Canadá", Continente:"América del Norte", id: "6"},
            {País: "Perú", Continente:"América del Sur", id: "7"},
            {País: "Argentina", Continente:"América del Sur", id:"8"},
            {País: "China", Continente:"Asia", id:"9"},
            {País: "Arabia Saudita", Continente:"Asia", id:"10"},
            {País: "Catar", Continente:"Asia", id:"11"},
            {País: "Armenia", Continente:"Asia", id:"12"},
            {País: "Italia", Continente:"Europa", id:"13"},
            {País: "España", Continente:"Europa", id:"14"},
            {País: "Reino Unido", Continente:"Europa", id:"15"},
            {País: "Luxemburgo", Continente:"Europa", id:"16"},
            {País: "Australia", Continente:"Oceanía", id:"17"},
            {País: "Nueva Zelanda", Continente:"Oceanía", id:"18"},
            {País: "Islas Marshall", Continente:"Oceanía", id:"19"},
            {País: "Palaos", Continente:"Oceanía", id:"20"},
        ];
        this.paisesBK = this.paises;
        this.onInit();
        console.log(this.paises);
    }
    onInit(){
        let cuerpo = document.getElementById("cuerpo");

        // Se limpian las filas existentes de la tabla
        while(cuerpo.rows.length > 0){
            cuerpo.deleteRow(0);
        }
        // Se agregan la informacion de los paises en la tabla
        this.paises.forEach(pais => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML  = pais.País;
            fila.insertCell(1).innerHTML = pais.Continente;
        });
    }
    
        
    buscar_pais(){
        let busqueda = document.getElementById('valor').value;
        this.paises = this.paisesBK;
        this.paises = this.paises.filter(pais => {
            const cond = pais.País.toLowerCase().indexOf(busqueda) > -1 || pais.Continente.toLowerCase().indexOf(busqueda) > -1
            console.log("Condicion: ", pais, busqueda, cond)
            return cond
            // return pais.País.toLowerCase().indexOf(busqueda) > -1;});
        })
        this.onInit();

    }   

        
    }
  // Se obtiene el formulario del buscador
let busqueda = new Busqueda();
let form = document.getElementById("busquedaForm");
form.addEventListener('submit', ()=>{
    busqueda.buscar_pais();
});