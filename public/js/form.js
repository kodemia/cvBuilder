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
  console.log('loading');
}
