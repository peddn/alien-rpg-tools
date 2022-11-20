
async function generate() {
// Asynchronous
const {
    randomBytes
  } = await import('node:crypto');
  
  randomBytes(16, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.toString('base64')}`);
  });
}

generate()