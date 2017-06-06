'use strict';

const filterByDistrict = (stations,query) => {

  stations.forEach(function(e){
    if(e.district.toLowerCase() == query.toLowerCase()){
      $('#contenedorInformacion').empty();

      const divAnswer = $('<div id="div-answer"></div>');
      const answerContenedor = $('<p>' + '<strong>' + e.name+'<br>'+ '</strong>' +'<br>'+e.address+ '<br>'+e.district+ '</p>')
      const hr = $('hr');


      divAnswer.append(answerContenedor);
      divAnswer.append(hr);
      $('#contenedorInformacion').append(divAnswer);
      return $('#contenedorInformacion');
       
      //return document.write(e.name + e.address + e. district);
    }
  });

}
