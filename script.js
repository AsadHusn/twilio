const accountSid = "ACd0a64e61711e13765808c47fe0c72212";
const authToken = "528c462a6c116e9582583244794b790e";
// const client = require("twilio")(accountSid, authToken);

// const ms = client
//   .messages("SM862d38eef7b25701a07a18e3c05a91f9")
//   .fetch()
//   .then((res) => console.log(res));


  const MessagingResponse = require('twilio').twiml.MessagingResponse;


const response = new MessagingResponse();
const message = response.message();
message.body('Hello World!');
response.redirect('https://demo.twilio.com/welcome/sms/');

console.log(response.toString());