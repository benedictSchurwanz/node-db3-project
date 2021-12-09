const Scheme = require('../schemes/scheme-model')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  const scheme = await Scheme.findById(req.params.id)
  if (scheme) {
    next()
  } else {
    next({ status: 404, message: `scheme with scheme_id ${req.params.id} not found` })
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = async (req, res, next) => {
  // get the stuff from the request, probably not the params. the request body. 
  // what are the fields?
  // scheme_id, scheme_name
  
  // const name = req.body.scheme_name;
  
  // if missing, empty string, or _not a string..._
  // how do I tell if something is a string? 
  
  // if () {
  //   next()
  // } else {
  //   next({ status: 400, message: `invalid scheme_name` })
  // }
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
