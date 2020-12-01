const setupInput = function() {
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
    conn.write('Move: up');
    console.log('up');
  }
  if (data === 'a') {
    conn.write('Move: left');
    console.log('left');
  }
  if (data === 's') {
    conn.write('Move: down');
    console.log('down');
  }
  if (data === 'd') {
    conn.write('Move: right');
    console.log('right');
  }
};
module.exports = setupInput, handleUserInput;