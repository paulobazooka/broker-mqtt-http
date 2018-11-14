const mosca = require('mosca');

host_ = 'localhost'
porta = 1883;

// configurações
const settings = {
    port: porta
}

// Instância do Servidor Mqtt
const serverMqtt = new mosca.Server(settings);


module.exports = serverMqtt;