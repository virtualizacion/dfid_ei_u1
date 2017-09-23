$(function(){

	dr.showInst();

    $("#dragDropTest").dragDropTest({
    	header: 'Es hora de poner a prueba lo aprendido, a fin de identificar los aspectos relacionados con la investigación holística y reforzar sus conocimientos en esta propuesta epistemológica.',
    	contButtonValidate: 'Verificar',
    	genHeight: '60px',
    	classOffsetColGen: "col-xs-offset-1",
    	definitions: {
			1: "hacer investigación de manera transdisciplinaria.",
			2: "manejar los aportes y propuestas de los diferentes paradigmas en investigación.",
			3: "cambiante y la investigación es un proceso de devenir personal e histórico.",
			4: "un proceso global, evolutivo, integrador, concatenado y organizado."
		},
		//se definen los drags a los drops
		drags: [
			{				
				content: "La comprensión holística de la investigación es una propuesta que presenta la investigación como",
				goesWith: 4 //para drop 1 drag numero 3
			},
			{				
				content: "El principio del devenir plantea que todo cambia permanentemente; por tanto, el conocimiento también es",
				goesWith: 3 //para drop 2 numero del drag numero 4
			},
			{			
				content: "Para trabajar con la comprensión holística de la investigación es esencial conocer y",
				goesWith: 2 //para drop 3 numero del drag numero 2
			},
			{				
				content: "Un aporte importante de la comprensión holística consiste en la posibilidad de",
				goesWith: 1 //para drop 4 numero del drag numero 1
			}
		],
		correct: function(){
			dr.showCorrect()
		},
		error: function(attempts){
			dr.showError()
		},
		fail: function(){
			dr.showFail()
		}
    });
})