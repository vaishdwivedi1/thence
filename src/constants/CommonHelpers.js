export const validateEmail = (email_id) => !(String(email_id).trim().length === 0) && !(String(email_id).trim().match('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$') == null);


export default validateEmail