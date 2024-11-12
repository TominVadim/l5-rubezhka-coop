class PostalValidator {
  isCode(str) {
    return `${str}`.startsWith('ZIP');
  }

  setPostalCodeLengthConstraint(mn, mx = Infinity) {
    this.minLength = mn;
    this.maxLength = mx;
    return this;
  }

  isNormLength(str) {
    if (!this.minLength) {
        return true;
    }
    const [, code] = `${str}`.split('_');
    return this.minLength <= code.length && code.length <= this.maxLength;
  }

  isValid(str) {
    return this.isCode(str) && this.isNormLength(str);
  }
}
export default PostalValidator;
