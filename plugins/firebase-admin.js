import firebaseaAdmin from "firebase-admin";

const fireConfig = {
  credential: firebaseaAdmin.credential.cert({
    type: "service_account",
    project_id: "changcucu-9085c",
    private_key_id: "2225451ce0ef4a8dfe5f644232fb157c8b02ef5e",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCpUmoI898leqXA\nolS7zALjrZWwn1dlyWg0q+xed6N1vLHGezT4WTUvr7iykwbUgUyzsEs693U9/lcX\nMFkvYfLgteKu5XuoKaVJGwQ8h4jHIAK7noHCZrfAxIB72oHJSKgp314YvIu3YAT1\nMkfm9YP/RGNcanwprED8S6W8jRNOgbQmVNWUzdfGFkdngSaX9jyT/IFTEjpOFMLb\nbsOD4e87K36UrYEcHbhgRYNZhbi7qWXhMo+fah7lUcPcp5pUd/j/9TFTE9pg/Hua\nyC0iJBohytakzke4wDg2YEHzUxRbBouFxjtSxfEUwv3AFXzhucrkxQnppa/fNrE5\n7FQSY9mHAgMBAAECggEAGuThvblKnM/dyvqdvdR6MwKrz4mHnr2+ZPtXyGt1Vaqa\njB2evMGinofpLMgIojFFZxcd4+hRQX8IA0FlMQ78Pm/1aPU/TmcK/1Egu6KFeade\nd8GF98RL9HzhsYpz6e4186ysa/5qrL4+G1oYrJkblaydoZyySwY2rjwvv4Ki6emS\n8wnMeGO4TDypjKJG+7VPwD+zikt4hrgE3FC8JpjzHV+ZKc8R/9enf8a4lRmCAiAi\nUTjsFFN1v5JgD3oNRuaTFHgozkEmT0BeHV3v0+7yl9JWpHTBJVUWBQ/wQdFKq1zQ\nhF9vHu8XUxMoyMSnVAlOvlT84M5kXo0Z1XndIAPe5QKBgQDWGYBULGPi+1V9jkVK\nIvO7ik5T+zKW5Sww3nE1b53xH5QCuf1ZLYwHLNvtIV+SFrfaLnp9DsGWGPhzq61A\nwpjU+pKjldwx8X9LwlxjQbEgIJ3SbvUtUUgZK/WebLq5gWzyn97Fp+Q6XT89HlDD\n0Z7Hr9SqiNf5DEgwK7wrL/4tIwKBgQDKdYdCSRcSzwiBtdMExwtlOMPDOZMooyS1\n1iTBxxDiIBlraonk5M1MCiC4sNMDDhlv01kTL6NnqJNP+T9jZVZnkH0rMon+VCZN\nq7wEqDLGr1HrRBC3r6GmaKU2FLqNOYy2qcaRF4QFSYLL+7sazYRQAc35ZXg2adWk\nvOQwj3ICTQKBgQCDQkEl2c0nVHVWM4oRaJpLCQD6hc+/KSNNlqKLYzHOqVCB12sW\naFEn+P2gRMyl8N2omsQntYtDrW1s5Pyj7mnqcPDD79V+nRMw7CjeBWFFVBnN8I7J\nyMJOBGBiT0CvCEU1/oOCZGsMySxDGTnkw7f3rrnQD3NxUXFUbwu+4n6PRwKBgQCZ\nDyVEvZEODSr3NQjlUb2Rtsp46ywPytbUCaMcRGzFJ1NQW+kH/NogJH/8YOIGK0Cb\nxAJRePBmS5GjImIDuPcLsLaQU9LzTZbvnWe1dZt9jcm2vWyOEd95uR89tYobfmid\nJ9kQk+ChRqP1psgbSUhAXDzl0QqCyJxVwOAavjeI+QKBgGGEyBfZGl2NvbTx1OGR\nYtd77f92q8oNk7jzkck5+tGQwWZm8gMlqRVZ4eA9w34yCEaqopDnbx/Yb66ZHLbb\ntYqRYAxaiw4NTUIqm/+pf0Ri/2+Jqrg+5n589LHXgR9OeojcFhGCnwUqXsfS37wB\nDwm1fPTotkRHtvDJskQCeldO\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-y8ud7@changcucu-9085c.iam.gserviceaccount.com",
    client_id: "105783355824789771128",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y8ud7%40changcucu-9085c.iam.gserviceaccount.com"
  }),
  databaseURL: "https://changcucu-9085c.firebaseio.com"
};

let fireAdmin;

// 判斷是否已經初始化過，如果沒有才初始化，有就直接使用firebase.app()
if (!fireAdmin && !firebaseaAdmin.apps.length) {
  fireAdmin = firebaseaAdmin.initializeApp(fireConfig);
} else {
  fireAdmin = firebaseaAdmin.app();
}

console.log(fireAdmin.database());

export { fireAdmin };
