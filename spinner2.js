const spin = (repeats) => {
  let delay = 100;
  let character = ['|', '/', '-', '\\'];
  for (let i = 0; i < repeats; i++) {
    for (let char of character) {
      setTimeout(() => write(char), delay += 200);
      if (char === '|' && i === 0) {
      setTimeout(() => write(char), delay);
      } else if (i === repeats - 1 && char === '\\') {
        setTimeout(() => {
          write('|');
          console.log();
        }, delay += 200);
      }
    }
  }
};

function write(character) {
  process.stdout.write(`\r${character}   `);
};

spin(4);