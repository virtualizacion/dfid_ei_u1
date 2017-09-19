$(function(){

    $("#dragDropTest").dragDropTest({
    	header: 'La siguiente actividad le ayudará a reforzar sus conocimientos con respecto al origen y el significado de la epistemología. Haga clic sostenido para relacionar el concepto con su definición correcta. Después de realizado el ejercicio haga clic en el botón “Verificar”.',
    	contButtonValidate: 'Verificar',
    	genHeight: '58px',
    	classOffsetColGen: "col-xs-offset-1",
    	definitions: {
			1: "Intenta dar respuestas acerca de los principales supuestos relacionados con el conocimiento que se genera en el ámbito científico.",
			2: "Inscribe todo propósito del conocer y hacia la cual convergen todas las explicaciones.",
			3: "Matriz de pensamiento que orienta la generación de conocimiento, desde los supuestos acerca del saber, su concepto, su propósito y sus criterios de validación.",
			4: "Visión parcial de una realidad, a partir de un punto de vista o perspectiva, que hace énfasis en ciertos aspectos de lo observado, pero omite otros que no pueden ser vistos desde la perspectiva en cuestión."
		},
		//se definen los drags a los drops
		drags: [
			{				
				content: "Paradigma",
				goesWith: 3 //para drop 1 drag numero 3
			},
			{				
				content: "Modelo epistémico",
				goesWith: 4 //para drop 2 numero del drag numero 4
			},
			{			
				content: "Epistemología",
				goesWith: 2 //para drop 3 numero del drag numero 2
			},
			{				
				content: "Filosofía",
				goesWith: 1 //para drop 4 numero del drag numero 1
			}
		]
    });
})