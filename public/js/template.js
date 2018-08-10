$(() => {
  initTemplate();
});

var signedIn = (user) => {
  // checkPermissions(user);
  console.log(user);
}

var signedOut = () => {
  console.log('visita');
  // withoutPermits();
}

var initTemplate = () => {
  let uid = window.location.search.slice(5);
  db.ref(`users/${uid}`).once('value',(snapshot) => {
    console.log(snapshot.val());
    fillTemplate(snapshot.val());
  });
}

var fillTemplate = (data) => {
  // head
  $('.resume-picture').css('background',`url(${data.photoURL}?height=120) no-repeat`);
  $('.resume-header > h1').html(data.cv.name);
  $('.resume-header > h3').html(data.cv.occupation);
  // personal information
  $('.address > .label-content').html(data.cv.address);
  $('.phone > .label-content').html(data.cv.phone);
  $('.email > .label-content').html(data.cv.email);
  $('.web > .label-content').html(data.cv.web);
  // social networks
  let social = data.cv.social_networks;
  if (social.facebook.checkbox == false ) {
    $('.facebook').hide();
  } else {
    $('.facebook > .label-content').html(social.facebook.link);
  }
  if (social.linkedin.checkbox == false ) {
    $('.linkedin').hide();
  } else {
    $('.linkedin > .label-content').html(social.linkedin.link);
  }
  if (social.skype.checkbox == false ) {
    $('.skype').hide();
  } else {
    $('.skype > .label-content').html(social.skype.link);
  }
  if (social.twitter.checkbox == false ) {
    $('.twitter').hide();
  } else {
    $('.twitter > .label-content').html(social.twitter.link);
  }
  data.cv.recognitions.map((res) => {
    $('.recognition').append(`
      <div class="data-label verified">
        <p class="label-title">${res.recognition}</p>
        <p class="label-content">${res.date}</p>
      </div>
    `)
  })
  data.cv.experiences.map((res) => {
    $('.experiences').append(`
      <div class="block-article">
        <div class="row">
          <div class="col-sm-2">
            <div class="date-wrapper">${res.fromYear}-${res.toYear}</div>
          </div>
          <div class="col-sm-10">
            <div class="article-wrapper">
              <h1 class="article-title">${res.company}</h1>
              <h2 class="article-subtitle">${res.role}</h2>
              <p class="article-text">${res.description}</p>
            </div>
          </div>
        </div>
      </div>
    `)
  });

  data.cv.educations.map((res) => {
    $('.educations').append(`
      <div class="block-article">
        <div class="row">
          <div class="col-sm-2">
            <div class="date-wrapper">${res.fromYear}-${res.toYear}</div>
          </div>
          <div class="col-sm-10">
            <div class="article-wrapper">
              <h1 class="article-title">${res.institution}</h1>
              <h2 class="article-subtitle">I${res.title}</h2>
              <p class="article-text">${res.description}</p>
            </div>
          </div>
        </div>
      </div>
    `)
  });

  data.cv.skills.map((res) => {
    $('.skill-wrapper').append(`
      <div class="col col-sm-6">
        <div class="skill-content">
          <span class="skill-label">${res.skill}</span>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${res.percentage}" aria-valuemin="0" aria-valuemax="100" style="width: ${res.percentage}%"></div>
          </div>
        </div>
      </div>
    `)
  });
}

var checkPermissions = (user) => {
  let displayName = user.displayName.replace(" ", "");
  console.log(user,displayName);
}

var withoutPermits = () => {
  console.log('No tiene permisos');
}
