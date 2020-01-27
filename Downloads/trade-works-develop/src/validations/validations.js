//TODO: Please fox the warning for no-useless-escape when u compile.
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_REGEX = /^[0-9]{3}.[0-9]{3}.[0-9]{4}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,}$/;
const NUMERIC_REGEX = /^[0-9\b]+$/;
const REGEX_EMIAL_END_WITH_DOT = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-])+\.$/;
const ATLEAST_ONE_CAPITAL_LETTER = /[A-Z]+/;
const NUM_OR_SYMBOL = /^[a-zA-Z]*[!@#$%^&*()_=+\[\]{};:,\.\?\d]+[a-zA-Z]*$/;

const restrictLeadingSpace = event => {
  if (event.charCode == 32) {
    const strInput = event.target.value;
    if (!strInput.length) {
      event.preventDefault();
    }
  }
};

export {
  REGEX_EMAIL,
  PHONE_REGEX,
  PASSWORD_REGEX,
  NUMERIC_REGEX,
  REGEX_EMIAL_END_WITH_DOT,
  ATLEAST_ONE_CAPITAL_LETTER,
  NUM_OR_SYMBOL,
  //   isEmail,
  restrictLeadingSpace,
};
