const express = require("express");
const { MessagingResponse } = require('twilio').twiml;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/status", (req, res) => {
  console.log("status changes");
  res.json("Hello world");
});

app.post("/whatsapp", (req, res) => {
  console.log("req.body = ", req.body);
  const twiml = new MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.type('text/xml').send(twiml.toString());

  // console.log("twiml = ", JSON.stringify(twiml))

  // const accountSid = "ACd0a64e61711e13765808c47fe0c72212";
  // const authToken = "528c462a6c116e9582583244794b790e";
  // const client = require("twilio")(accountSid, authToken);

  // client.messages
  //   .create({
  //     body: "this is response asad ohh",
  //     // body: req.body.message,
  //     from: "whatsapp:+14155238886",
  //     // statusCallback: "https://46dd-124-29-220-20.in.ngrok.io/status",
  //     to: "whatsapp:+923004991283",
  //   })
  //   .then((message) => console.log(message.sid));
  // res.send("success");
});

app.listen(5000, () => console.log("app running on 5000"));
