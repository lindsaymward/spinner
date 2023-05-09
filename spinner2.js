const spin = (repeats) => {
  let delay = 100;
  let character = ['|', '/', '-', '\\'];
  for (let i = 0; i < repeats; i++) {
    for (let char of character) {
      setTimeout(() => write(char), delay);
      delay += 200;
      if (i === repeats - 1 && char === '\\') {
        setTimeout(() => {
          write('|');
          console.log();
        }, delay);
      }
    }
  }
};

function write(character) {
  process.stdout.write(`\r${character}   `);
};

spin(2);