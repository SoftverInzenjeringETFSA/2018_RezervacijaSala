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

  const validateClassroomName = (name) => {
    if(!name)
    return false;

    var re = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    return re.test(name);
  }

  const validateClassroomType = (type) => {
    if(!type)
    return false;
    /*
      Same regex as above for classroom name validation
    */
    var re = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    return re.test(type);
  }

  const validateClassroomNumberOfSeats = (number_of_seats) => {
    if(!number_of_seats)
    return false;

    var re = /^([1-4][0-9]|50)$/;
    return re.test(number_of_seats);
  }

  const validateClassroomEquipment = (equipment) => {
    if(!equipment)
    return false;
    /*
      Same regex as above for classroom name validation
    */
    var re = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    return re.test(equipment);
  }

  const validateClassroomNumberOfKeys = (number_of_keys) => {
    if(!number_of_keys)
    return false;

    var re = /^[1-3]$/;
    return re.test(number_of_keys);
  }

  return {
    validateEmail,
    validatePassword,
    validateRepassword,
    validateClassroomName,
    validateClassroomType,
    validateClassroomNumberOfSeats,
    validateClassroomEquipment,
    validateClassroomNumberOfKeys
  };
})();

export default Validation;
