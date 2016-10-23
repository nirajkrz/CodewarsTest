/***************************************************************************************************************************

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false



*******************************************************************************************************************************/

function validatePIN (pin) {
//	Why not use the regular expression '^\\d{4}(\\{6})?$' and get rid of the length test?
  var r = new RegExp('^(\\d{4}|\\d{6})$');

  return r.test(pin);

}
