const net = require('net');
const {IP, PORT} = require('./constants')
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
      conn.write('Name: SSM');
      conn.write('Say: Hi');
      
      /*setTimeout(() => {conn.write("Move: up");} , 1000)
      setTimeout(() => {conn.write("Move: up");} , 2000)
      setTimeout(() => {conn.write("Move: left");} , 3000)
      setTimeout(() => {conn.write("Move: left");} , 4000)
      setTimeout(() => {conn.write("Move: down");} , 5000)
      setTimeout(() => {conn.write("Move: down");} , 6000)
      setTimeout(() => {conn.write("Move: right");} , 7000)*/
      
    });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    });
    
  return conn;
}
module.exports = connect;