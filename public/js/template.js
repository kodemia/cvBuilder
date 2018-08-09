var signedIn = (user) => {
  checkPermissions(user);
}

var signedOut = () => {
  withoutPermits();
}

var checkPermissions = (user) => {
  let displayName = user.displayName.replace(" ", "");
  console.log(user,displayName);
}

var withoutPermits = () => {
  console.log('No tiene permisos');
}
