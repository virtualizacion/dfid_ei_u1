$(function(){

	dr.showInst();

    $("#dragDropTest").dragDropTest({
    	header: 'A continuación encontrará algunos de los modelos epistémicos tratados anteriormente, para que compruebe su proceso de estudio. Arrastre la respuesta al modelo que le corresponde.',
    	contButtonValidate: 'Verificar',
    	genHeight: '64px',
    	classOffsetColGen: "col-xs-offset-1",
    	definitions: {
			1: "Su concepto básico está definido un conjunto de elementos que conforman una unidad, de modo tal que hay una ley que determina la composición interna de dicha unidad, y la modificación de una de las partes implica la modificación de las otras.",
			2: "Centra la importancia de los hechos por encima de las ideas, en donde la experimentación en vez de los desarrollos fundamentalmente teóricos.",
			3: "Una de sus planteamientos principales está fundamentado en el cambio como un proceso que obedece a contradicciones y busca que el estudio de la sociedad se realice partir de lo real y no de las ideas acerca de lo real.",
			4: "Para este modelo, las teorías son relevantes solo si guían la práctica y tienen la capacidad de generar resultados deseados para resolver los dilemas humanos y sociales.",
			5: "Considera que los objetos del conocimiento son definidos por operaciones activas, y el conocimiento es un producto de la acción humana. No establece una dicotomía entre teoría y práctica."		
		},
		//se definen los drags a los drops
		drags: [
			{				
				content: "Pragmatismo",
				goesWith: 3 //para drop 1 drag numero 3
			},
			{				
				content: "Materialismo dialéctico",
				goesWith: 4 //para drop 2 numero del drag numero 4
			},
			{			
				content: "Estructuralismo",
				goesWith: 2 //para drop 3 numero del drag numero 2
			},
			{				
				content: "Positivismo",
				goesWith: 5 //para drop 4 numero del drag numero 1
			},
			{				
				content: "Pragmatismo sociologista",
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