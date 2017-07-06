const net = require('net');
const clients = [];
const server = net.createServer((socket) =>{

	// read input data from client side
 socket.on('data',function(data){ 
 	// var clientMsg = data;
 	// var msg = process.stdout.write(clientMsg.toString());
 	// clients.forEach((client)=>{
 	// 	clients.push(socket);
 	// })

		function broadcast(message, sender){
			clients.forEach((client)=>{
				if(client === sender){
					return;
				}else{
					client.write(message); 
				// clients.push(socket);
				}
		});
	}

	// debuffers data from client
	process.stdout.write(data.toString());
	});


	// client disconnect close out socket
	socket.on('close',()=>{ 
		process.stdout.write('\n' + 'disconnect');
	});

}).listen (6969, '0.0.0.0');


const broadcastMsg = net.createConnection({port:6969},()=>{

	process.stdin.on('readable', () => {
  	var chunk = process.stdin.read();
  		if (chunk !== null) {
   		 process.stdout.write(`data: ${chunk}`);
  		}
	});
});


