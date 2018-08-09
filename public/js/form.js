// Login
$('#sign-in').click((e) => {
	auth.signInWithPopup(provider).then((result) => {
		console.log('inicio de sesión exitoso');
	}).catch((error) => {
	  console.log(error,'error');
	});
});

$('#sign-out').click((e) => {
	auth.signOut().then(() => {
	  console.log('se cerro la sesión');
	}).catch((error) => {
	  console.log(error,'error');
	});
});

var signedIn = (user) => {
	$('#main-wrapper, #sign-out').show();
	$('#sign-in').hide();
}

var signedOut = () => {
	$('#main-wrapper, #sign-out').hide();
	$('#sign-in').show();
}

// form
$('#btn-cv').click((e) => {
  let data = retrieveData();
});

var retrieveData = () => {
  let dataCV = {
    'nombre':    $('#f-nombre').val(),
    'telefono':  $('#f-telefono').val(),
    'ocupacion': $('#f-ocupacion').val(),
    'direccion': $('#f-direccion').val(),
    'email':     $('#f-email').val(),
    'web':       $('#f-web').val(),
    'redes_sociales': {
      'facebook':{
        'checkbox': $('#f-c-facebook').is(':checked'),
        'link': $('#f-facebook').val()
      },
      'twitter': {
        'checkbox': $('#f-c-twitter').is(':checked'),
        'link': $('#f-twitter').val()
      },
      'linkedin': {
        'checkbox': $('#f-c-linkedin').is(':checked'),
        'link': $('#f-linkedin').val()
      },
      'skype': {
        'checkbox': $('#f-c-skype').is(':checked'),
        'link': $('#f-skype').val()
      }
    }
  }
  console.log(dataCV);
}
