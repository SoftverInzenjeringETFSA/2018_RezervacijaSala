/*
  Helper functions for validation
*/

const Validation = (() => {

  const validateEmail = (email) => {
    if(!email)
      return false;
    /*
      Google regex for valid emails
    */
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const validatePassword = (password) => {
    if(!password)
      return false;
      /*
        Regex checks for atleast one: uppercase letter, lowercase letter, digit and length of 6 to 15 characters
      */
    var re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#-_]{6,15}$/;
    return re.test(password);
  }

  const validateRepassword = (password, repassword) => {
    if(!password || !repassword)
      return false;
      /*
        Same regex as above for password validation
      */
    var re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#-_]{6,15}$/;
    return re.test(password) && re.test(repassword) && password === repassword;
  }

  return {
    validateEmail,
    validatePassword,
    validateRepassword
  };
})();

export default Validation;
