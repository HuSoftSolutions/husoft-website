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

const sgMail = require("@sendgrid/mail");

exports.sendEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called " + "while authenticated."
    );
  }
  sendEmailFlow(data);
});

/** This is a description of the foo function.
 * @param {string} payload - the email payload
 */
async function sendEmailFlow(payload) {
  const type = payload?.template || "contact_template";
  const API_KEY = functions.config().sendgrid.key;
  const TEMPLATE_ID = functions.config().sendgrid[type];
  sgMail.setApiKey(API_KEY);
  const emailTo = payload?.emailTo || ["cody.husek@husoftsolutions.com"];

  try {
    const msg = {
      to: emailTo,
      from: "team@husoftsolutions.com",
      templateId: TEMPLATE_ID,
      dynamic_template_data: payload,
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (error) {
    console.log(error);
  }
}

