const Validator = require("validator");
const validText = require('./valid-text');

module.exports = function (data) {
  let errors = {};

  //data.start_date = data.start_date.hasOwnProperty("_d") ? data.start_date : "";
  // data.end_date = data.end_date.hasOwnProperty("_d") ? data.end_date : "";
  //data.guest_count = validText(toString(data.guest_count)) ? data.guest_count : "";

  // if (Validator.isEmpty(data.startDate)) {
  //   errors.start_date = "must enter start date";
  // }

  // if (Validator.isEmpty(data.endDate)) {
  //   errors.end_date = "must enter end date";
  // }

  // if (Validator.isEmpty(data.guest_count)) {
  //   errors.guest_count = "must enter number of guests";
  // }
  console.log(`errors: ${Object.values(errors)}`);
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
