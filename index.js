import PostalValidator from './src/PostalCodeSchema.js';

class Validator {
  postalCode() {
    return new PostalValidator();
  }
}

export default Validator;
