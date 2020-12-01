let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');
    console.log('up');
  }
  if (data === 'a') {
    connection.write('Move: left');
    console.log('left');
  }
  if (data === 's') {
    connection.write('Move: down');
    console.log('down');
  }
  if (data === 'd') {
    connection.write('Move: right');
    console.log('right');
  }
};
module.exports = setupInput;