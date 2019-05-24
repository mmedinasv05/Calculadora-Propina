//Funcion para calcular la propina
function calularPropina() {
    var totalCompra = document.getElementById('TotalPagar').value;
    var porcentajePropina = document.getElementById('PocentajePropina').value;
    var totalPersonas = document.getElementById('TotalPersonas').value;
    var propina;
    var totalPropina;
    var propinaPersona;

    if (totalCompra == "")
    {
        document.getElementById('messageError').innerHTML = "Llene todos los campos por favor";

    }else{

    //Validacion para comparar que se ingrese solo datos numericos
    if (!isNaN(totalCompra) && !isNaN(porcentajePropina) && !isNaN(totalPersonas)) {

        //Calcular procesos
        propina = porcentajePropina/100;

        totalPropina = totalCompra*propina;

        propinaPersona = (totalPropina/totalPersonas).toFixed(2);
        

        document.getElementById('propinaTotal').innerHTML = 'El porcentaje de la propina es del ' + propina*100 + '%';
        document.getElementById('propinaDividir').innerHTML = 'La propina por persona es $ ' + propinaPersona;
        document.getElementById('messageError').innerHTML = "";

    }else{
        alert('Ingrese solo valores númericos por favor');
    }
}
}
//Funcon para limpiar todos los campos 
function limpiarCampos(){
    document.getElementById('TotalPagar').value = "";
    document.getElementById('PocentajePropina').value = "";
    document.getElementById('TotalPersonas').value = "";
    document.getElementById('propinaTotal').innerHTML = "";
    document.getElementById('propinaDividir').innerHTML = "";
    document.getElementById('messageError').innerHTML = "";
}