$(function(){

	//------------------------------------------------------------------------------------
    /*$("#completeSentence").completeSentence();*/

	$("#falseTrue").falseTrue({
		"header": "Lea la afirmación y elija si es falsa o verdadera.",    	
		"statements": [
			{
				"statement":"Lo cuantitativo y lo cualitativo en la investigación son paradigmas epistémicos.",
				"eval": "false"				
			},
			{
				"statement":"No es posible identificar a los precursores y creadores de lo cualitativo y de lo cuantitativo dentro de la historia de la filosofía.",
				"eval": "true"
			},
			{
				"statement":"Lo cualitativo y lo cuantitativo poseen un método propio para investigar.",
				"eval": "false"
			},
			{
				"statement":"El uso de técnicas cuantitativas implica necesariamente probar hipótesis y las técnicas cuantitativas se utilizan solo para resolver problemas y hacer investigación aplicada.",
				"eval": "false"
			}

		],
		lblStmtEvalTrue: "Verdadero",
		lblStmtEvalFalse: "Falso",
		lblBtnValidate: "Validar",
		correct: function(){
			//alert("Correcto!, todo esta bien.");
			$("#crt1").trigger('click');
		},
		error: function(){
			//alert("Incorrecto!, todo esta mal.");
			$("#crt2").trigger('click');
		}
	});
    //------------------------------------------------------------------------------------
})