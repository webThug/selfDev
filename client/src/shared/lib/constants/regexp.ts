export const REGEXP = {
  EMAIL: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
  PHONE: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
  USERNAME: /^[a-zA-Z0-9_-]{3,16}$/,
  LIGHT_PASSWORD: /[a-zA-Z0-9]{6,}/g,
  MEDIUM_PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
  STRONG_PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  ZIP_CODE: /^\d{6}$/,
  INTEGER: /^\d+$/,
  ONLY_INDENTS: /\s/g,
  DIGITS_NUMBERS: /\d{1,3}(?=(\d{3})+(?!\d))/g,
  URL: /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&/=]*)?/gi,
} as const;
