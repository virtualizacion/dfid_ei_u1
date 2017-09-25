(function ( $ ) {

	$.fn.falseTrue = function(options) {
		/*This are the defaults*/
		var settings = $.extend({
			classColHeader: "col-xs-12",
			classColContStatement: "col-xs-12",
    		classColStatement: "col-xs-8",
    		classColEval: "col-xs-4",
    		classColstmtEval: "col-xs-6",
    		classColBtnValidate: "col-xs-12",
    		lblStmtEvalTrue: "True",
    		lblStmtEvalFalse: "False",
    		lblBtnValidate: "Validate",
    		"header": "Header goes here.",
			"statements": [],
			start: function(){
				console.log("Comienza prueba falseTrue!")
			},
			correct: function(){
				alert("Correcto!, todo esta bien.");
			},
			error: function(){
				alert("Incorrecto!, todo esta mal.");
			}
		}, options);

		//------------------------------------------------------------
		//definiciones globales
		//------------------------------------------------------------		
		var $self = $(this);
		var self = this;		
		//------------------------------------------------------------

		this.getHeader = function(header){
			return '<div class="headerStatement '+settings.classColHeader+'">'+
						'<p>'+header+'</p>'+
				   '</div>';
		}

		this.getStatement = function(id, statement){
			return '<div class="contStatement '+settings.classColContStatement+'">'+
						self.renderStatement(id, statement)
				   '</div>';
		}

		this.renderStatement = function(id, statement){
			return '<div class="statement '+settings.classColStatement+'">'+
			       		'<p class="statement_p">'+statement+'</p>'+
			       '</div>'+
			       '<form action="">'+
				       '<div class="'+settings.classColEval+' stmtEval stmt'+id+'eval">'+
				       		'<div class="'+settings.classColstmtEval+' stmtEvalTrue"><input type="radio" data-id-stmt="'+id+'" name="stmt'+id+'evalRadio" value="true"> '+settings.lblStmtEvalTrue+'</div>'+
				       		'<div class="'+settings.classColstmtEval+' stmtEvalFalse"><input type="radio" data-id-stmt="'+id+'" name="stmt'+id+'evalRadio" value="false"> '+settings.lblStmtEvalFalse+'</div>'
				       +'</div>'+
			       '</form>';
		}

		this.renderValidateBtn = function(){ // 
			return '<div class="'+settings.classColBtnValidate+' text-right validate">'+
						'<button id="btnValidateFT">'+settings.lblBtnValidate+'</button>'
				   '</div>';
		}

		this.renderStatements = function(){

			var it = $.each(settings.statements, function(index, val) {
				
				//console.log(val)
				
				$self.append(self.getStatement(index,val.statement));						
			});

			$.when(it).then(function(){

				$self.prepend(self.getHeader(settings.header));
				
				$self.append(self.renderValidateBtn());

				$(":radio").click(function(){
					 self.addAnwsStatements($(this));
				})

				$("#btnValidateFT").click(function(event) {
					self.validateAnswer($(this));
				});
				//-----------------------------------------
				settings.start();
			});
		}		

		this.addAnwsStatements = function($element){

			let idArr =	$element.data("id-stmt");

			//console.log($element.data("id-stmt")) 
			//console.log($element.val())
			//console.log(settings.statements[$element.data("id-stmt")].eval)

			if (settings.statements[idArr].eval == $element.val()) {
				settings.statements[idArr].correct = true; 
			} else {
				settings.statements[idArr].correct = false;
			}

			//console.log(settings.statements)	
		}

		this.validateAnswer = function($btn){

			var validaciones = 0;

			var it = $.each(settings.statements, function(index, val) {

				//console.log(typeof val.correct)
								
				if (typeof val.correct === "undefined") {
					console.log("No ha seleccionado todas las respuestas, inténtelo de nuevo.");
					return false;
				} else {
					//console.log(val.correct)

					if (!val.correct) {						
						//console.log("Hay respuestas incorrectas, por favor inténtelo de nuevo.");
						return false;
					}else {						
						//console.log("suma 1 a validaciones.");
						validaciones++;
					}
				}

			});

			$.when(it).then(function(){
				//console.log("Termina validación correctamente.")
				//console.log(settings.statements.length)
				//console.log(validaciones)

				if (validaciones == settings.statements.length) {
					//evento settings correct
					settings.correct();
				} else {
					//evento settings error
					settings.error();
				}

				$btn.unbind('click');				
			});
		}
		
		//------------------------------------------------------------

		//------------------------------------------------------------
		//start
		this.renderStatements();
		//------------------------------------------------------------
	};

}( jQuery ));