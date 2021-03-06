import API from "../backend-api";

export async function isLoginUnique(value) {
  if (value === null) return true;
  const formData = new FormData();
  formData.append("login", value);

  const response = await API.checkDataUniqueness({
    data: formData,
    dataTitle: "Login"
  });
  return !response.data.isExist;
}

export function isLoginValid(value) {
  if (value === null) return true;

  const pattern = /^[a-zA-Z][a-zA-Z0-9-.]{1,20}$/;
  return pattern.test(value);
}

export async function isEmailUnique(value) {
  if (value === null) return true;
  const formData = new FormData();
  formData.append("email", value);

  const response = await API.checkDataUniqueness({
    data: formData,
    dataTitle: "Email"
  });

  return !response.data.isExist;
}

export function isPassValid(value) {
  if (value === null) return true;

  const pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return pattern.test(value);
}
