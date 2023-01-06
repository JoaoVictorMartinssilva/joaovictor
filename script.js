function abrimenu() {
    let BarraMenuAberto = document.getElementById ('barra-menu')

    if (BarraMenuAberto.style.width == "0px") { /*Antes da barra abrir ela vai ter 0px de width*/
        BarraMenuAberto.style.width = "180px" /*Quando clicar ela vai abrir em 180px*/
    } else{
        BarraMenuAberto.style.width = "0px" /*Quando clicar novamente ela feixa*/
    }
 
}