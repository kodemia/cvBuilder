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
  console.log(user);
  $('#f-nombre').val(user.displayName);
  $('#sign-out , .card').show();
  $('#sign-in').hide();
}

var signedOut = () => {
  $('#sign-out , .card').hide();
  $('#sign-in').show();
}

// arrays
var experienceArray  = [];
var educationArray   = [];
var recognitionArray = [];
var skillArray       = [];

// nueva experiencia
$('#btn-experience').click((e) => {
  let newExperience =  {
    company: $("#f-company").val(),
    role:    $("#f-role").val(),
    description: $("#f-descripcionRole").val(),
    fromYear: $("#f-fromJobs").val(),
    toYear: $("#f-toJobs").val()
  }
  experienceArray.push(newExperience);
  $('.f-experience').val('');
  printOption(".experience-wrapper",newExperience.company)
});

// nueva escuela
$('#btn-education').click((e) => {
  let newEducation =  {
    institution: $("#f-institution").val(),
    title:    $("#f-title").val(),
    description: $("#f-descriptionEducation").val(),
    fromYear: $("#f-fromEducation").val(),
    toYear: $("#f-toEducation").val()
  }
  educationArray.push(newEducation);
  $('.f-education').val('');
  printOption(".education-wrapper",newEducation.institution)
});

// nuevo reconocimiento
$('#btn-recognition').click((e) => {
  let newRecognition =  {
    recognition: $("#f-recognitionReceived").val(),
    date:    $("#f-recognitionDate").val()
  }
  recognitionArray.push(newRecognition);
  $('.f-recognition').val('');
  printOption(".recognition-wrapper",newRecognition.recognition)
});

// nueva Habilidad
$('#btn-skill').click((e) => {
  let newSkill =  {
    skill:      $("#f-skill").val(),
    percentage: $("#f-skillPercentage").val()
  }
  skillArray.push(newSkill);
  $('.f-skill').val('');
  printOption(".skill-wrapper",newSkill.skill)
});

const printOption = (experienceWrapper,company) => {
  console.log(company);
  $(experienceWrapper).append(
    `<div class="all-tag p-2 mr-2 mt-2">${company}</div>`
  )
}
// form

$('#btn-cv').click((e) => {
  let data = retrieveData();
});

var retrieveData = () => {
  let dataCV = {
    name: $('#f-name').val(),
    phone: $('#f-phone').val(),
    occupation: $('#f-occupation').val(),
    address: $('#f-address').val(),
    email: $('#f-email').val(),
    web: $('#f-web').val(),
    social_networks: {
      facebook:{
        'checkbox': $('#f-c-facebook').is(':checked'),
        'link': $('#f-facebook').val()
      },
      twitter: {
        'checkbox': $('#f-c-twitter').is(':checked'),
        'link': $('#f-twitter').val()
      },
      linkedin: {
        'checkbox': $('#f-c-linkedin').is(':checked'),
        'link': $('#f-linkedin').val()
      },
      skype: {
        'checkbox': $('#f-c-skype').is(':checked'),
        'link': $('#f-skype').val()
      }
    },
    experiences:  experienceArray,
    educations:   educationArray,
    recognitions: recognitionArray,
    skills:       skillArray
  }
  sendDataToDB(dataCV);
}

const sendDataToDB = (cv) => {
  $('#btn-close-modal').attr('disabled',true);
  $('#modal-cv').modal('show');
  $('#btn-close-modal').html('Cargando..');
  $('.modal-body > p').html('Subiendo curriculum');
  let uid = auth.currentUser.uid;
  db.ref(`users/${uid}`).set({
    uid: uid,
    photoURL: auth.currentUser.photoURL,
    cv: cv
  }).then((res) => {
    $('.modal-body > p').html(`
      Se guardo con exito
      <br>
      Consulta tu CV <a href="${window.location.origin}/cvtemplate.html?uid=${uid}">aquí</a>
    `);
    $('#btn-close-modal').html('Cerrar');
    $('#btn-close-modal').attr('disabled',false);
  }).catch((error) => {
    $('.modal-body > p').html('Ocurrio un error');
    console.log(error);
  });
}

$('#btn-close-modal').click(() => {
  window.location.reload();
});
