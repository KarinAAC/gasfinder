'use strict'
const Section = (update) => {
  const contenedorGeneral = $('<div id="contenedor-general"></div>');
  const divInput = $('<div id="div-input"></div>')
  const input = $('<input id="input-item" type="text" placeholder="Ingresa tu distrito a buscar">');
  const hr = $('<hr>');

  divInput.append(input);
  contenedorGeneral.append(divInput);
  contenedorGeneral.append(hr);

  input.keyup(function(){
    filterByDistrict(state.stations, $(this).val());
  });


  return contenedorGeneral;
}
