const functions = require("firebase-functions");
const admin = require("firebase-admin");

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const axios = require("axios");

exports.validateRecaptcha = functions.https.onCall(async (data, context) => {
  const { recaptchaToken } = data;

  console.log(context);

  const googleRecaptchaValidationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${
    functions.config().recaptcha.secret
  }&response=${recaptchaToken}`;
  const response = await axios.post(googleRecaptchaValidationUrl);
  const { success } = response.data;

  if (!success) {
    throw new functions.https.HttpsError("invalid-argument", "Invalid captcha");
  }

  // Continue with your form submission process,
  // or return a success response that the token is valid
  return { success: true };
});
