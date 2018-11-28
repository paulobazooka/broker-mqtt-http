const mosca = require('mosca');

HOST = '192.168.0.190'
PORT = 8443;

const SECURE_KEY = './tls-key.pem';
const SECURE_CERT = './tls-cert.pem';

// configurações
const settings = {
    logger: {
      name: "secure",
      level: 40,
    },
      secure : { 
        port: PORT,
        keyPath: SECURE_KEY,
        certPath: SECURE_CERT,
  }
}

const settings2 = {
  host: HOST,
  port: PORT
}

// Instância do Servidor Mqtt
const serverMqtt = new mosca.Server(settings2);


module.exports = serverMqtt;