$(function() {
	
	// Botones
	var btnCalcular = $('#btn_calcular').on('click', calcular);


});

function calcular() {
	var prc_individual = parseInt($('#precio_individual').text());
	var cant = parseInt($('#cantidad').val());
	
	var vlr_adicionales = 0;

	var prc_globos = parseInt($('#prc_globos').text());
	var prc_flores = parseInt($('#prc_flores').text());
	var prc_chocolates = parseInt($('#prc_chocolates').text());
	var prc_vino_nal = parseInt($('#prc_vino_nal').text());
	var prc_vino_imp = parseInt($('#prc_vino_imp').text());


	var adicionales = $('input');
	var i;
	for( i=0; i<adicionales.length; i++ ) {
		if( adicionales[i].value == "Globos" && adicionales[i].checked == true ) {
			vlr_adicionales += prc_globos;
		}
		else if( adicionales[i].value == "Flores" && adicionales[i].checked == true ) {
			vlr_adicionales += prc_flores;
		}
		else if( adicionales[i].value == "Chocolates" && adicionales[i].checked == true ) {
			vlr_adicionales += prc_chocolates;
		}
		else if( adicionales[i].value == "Vino nacional" && adicionales[i].checked == true ) {
			vlr_adicionales += prc_vino_nal;
		}
		else if( adicionales[i].value == "Vino importado" && adicionales[i].checked == true ) {
			vlr_adicionales += prc_vino_imp;
		}
	}
	
	total = ( prc_individual + vlr_adicionales ) * cant;

	$('#vlr_individual').val( prc_individual + vlr_adicionales ).number(true,0);
	$('#total').val( "$  " + total ).number(true,0);

}