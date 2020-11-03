// function logica(){
// 	var userInput = document.getElementById('ulog');
// 	var passInput = document.getElementById('plog');
// 	var porOut = document.getElementById('poruka');

// 	switch (userInput.value){
// 		case 'dovla': (if(passInput=='dovla'){
			
// 		})
// 	}
// }

var user=document.forms['form']['ulog'];
var pass=document.forms['form']['plog'];
//var f=document.getElementById;

var u_err=document.getElementById('user_error');
var p_err=document.getElementById('pass_error');





// user.addEventListener('textInput', user_Verify);
// pass.addEventListener('textInput', pass_Verify);

function validated(){
	if(user=='dov'&&pass=='dov'){
		// user.style.border ='1px solid green';
		// pass.style.border ='1px solid green';
		// u_err.style.display ='none';
		// user.focus();
		// pass.focus();


		window.location.href = 'dov/index_dov.html';
		// document.form.action = "dov/index_dov.html";

		// var frm = document.getElementById('form') || null;
		// 	if(frm) {
  // 		 frm.action = './../dov/index_dov.html' 
		// 	}
		// var frm = document.getElementById('form');
		// frm.action = 'index_dov.html' ;
		// var vozdrica =document.getElementById('vozdrica');
		// vozdrica.innerHTML= "Zdrao dov!!!";
		// vae vozlog=document.getElementById("vozlog");
		// vozlog.innerHTML="Djes dovlona";

		//return true;
	}
	// }
	// 	if((user.value!="dov")&&(user.value!="bo")&&(user.value!="ma")){
	// 	user.style.border ='1px solid red';
	// 	u_err.style.display ='inline';
	// 	user.focus();
	// 	return false;
	// }
	// if((pass.value!="dov")&&(pass.value!="bo")&&(pass.value!="ma")){
	// 	pass.style.border ='1px solid red';
	// 	p_err.style.display ='block';
	// 	user.focus();
	// 	return false;
	// }
	}


// function validated(){
// 	if((user.value!="dov")&&(user.value!="bo")&&(user.value!="ma")){
// 		user.style.border ='1px solid red';
// 		u_err.style.display ='inline';
// 		user.focus();
// 		return false;
// 	}
// 	if((pass.value!="dov")&&(pass.value!="bo")&&(pass.value!="ma")){
// 		pass.style.border ='1px solid red';
// 		p_err.style.display ='block';
// 		user.focus();
// 		return false;
// 	}
// }
// function user_Verify(){
// 	if((user.value=='dov')&&(pass.value=='dov')){
// 		user.style.border ='1px solid green';
// 		u_err.style.display ='none';
// 		user.focus();
// 		document.form.action="dov/index_dov.html";
// 		return true;
// 	} if((user.value=='bo')&&(pass.value=='bo')){
// 		user.style.border ='1px solid green';
// 		p_err.style.display ='none';
// 		pass.focus();
// 		return true;
// 	}if((user.value=='ma')&&(pass.value=='ma')){
// 		user.style.border ='1px solid green';
// 		p_err.style.display ='none';
// 		pass.focus();
// 		return true;
// 	}
// }
// function pass_Verify(){
// 	if(pass.value='dov'){
// 		user.style.border ='1px solid green';
// 		p_err.style.display ='none';
// 		pass.focus();
// 		return true;
// 	}return validated();
// }