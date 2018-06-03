const Validation = (() => {
  const validateEmail = (email) => {
    if(!email)
      return false;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  const validatePassword = (password) => {
    if(!password)
      return false;
    var re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#-_]{6,15}$/;
    return re.test(password);
  }
  const validateRepassword = (password, repassword) => {
    if(!password || !repassword)
      return false;
    var re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#-_]{6,15}$/;
    return re.test(password) && re.test(repassword) && password === repassword;
  }
  return {
    validateEmail: validateEmail,
    validatePassword: validatePassword,
    validateRepassword: validateRepassword
  };
})();

export default Validation;
