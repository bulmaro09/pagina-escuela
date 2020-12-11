
alert("Deseas calcular tu IMC?")
calcular.onclick = function(){


    nombre=document.getElementById("")
    edad=document.getElementById("")
    calc = document.getElementById("calc");
	kg = document.getElementById("kg");
	m = document.getElementById("m");
	imc = document.getElementById("imc");
	lectura = document.getElementById("lectura");

		if(kg.value!="" && m.value!=""){
			imcx = (kg.value / (m.value* m.value));
			imc.innerHTML = imcx
			console.log(imcx);

            if(imcx<18.5)
            { 
                lectura.innerHTML = "Peso insuficiente"; 
            }
			else if(imcx>=18.5 && imcx<=24.9){ lectura.innerHTML = "Peso normal"; }
            else if(imcx>=25 && imcx<=26.9){ lectura.innerHTML = "Sobrepeso de grado I"; }
            else if(imcx>=27 && imcx<=29.9){ lectura.innerHTML = "Sobrepeso de grado II (Preobesidad)"; }
			else if(imcx>=30 && imcx<=34.9){ lectura.innerHTML = "Obesidad de tipo I"; }
			else if(imcx>=35 && imcx<=39.9){ lectura.innerHTML = "Obesidad de tipo II"; }
			else if(imcx>=40 && imcx<=49.9){ lectura.innerHTML = "Obesidad de tipo III(Morbida)"; }
			else if(imcx>50){ lectura.innerHTML = "Obesidad de tipo IV (Extrema!!)"; }

		}else{
			alert("Debes  de ingresar peso y altura.")
		}

}


