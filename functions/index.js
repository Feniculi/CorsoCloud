/* eslint-disable  */
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions
    .region('europe-west3')
    .https
    .onRequest((request, response) => {
        functions.logger.info("Hello logs!", { structuredData: true });
        response.send("Hello from Firebase!");
    });


exports.echo = functions
    .region('europe-west3')
    .https.onCall((data, context) => {
        if (context.auth.uid) {
            functions.logger.info("Hello callable", { structuredData: true });
            functions.logger.info(context.auth);
            return data
        } else {
            functions.logger.info("Hello callable: utente non autenticato", { structuredData: true });
            return { error: 'NOT_AUTHENTICATED' }
        }

    });