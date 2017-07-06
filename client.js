const net = require('net');
const client = net.createConnection({port:6969},()=>{
    
  process.stdin.on('readable', () => {
    //reads input
    var chunk = process.stdin.read();
    // if nothing inputs don't run next code
      if (chunk !== null) { 
      //display input
        process.stdout.write(`data: ${chunk}`);
      // push input to server
        client.write(chunk); 
      }
    });

  });


