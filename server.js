const net = require('net');
const clients = [];
const server = net.createServer((socket) =>{

  // read input data from client side
 socket.on('data',function(data){ 

	function broadcast(sender){
	  clients.forEach((client)=>{
		if(client === sender){
		  return;
		}else{
		process.stdout.write(data.toString());
		}
	});
  }

  // debuffers data from client
  // process.stdout.write(data.toString());
  // });

  // client disconnect close out socket
  socket.on('close',()=>{ 
	process.stdout.write('\n' + 'disconnect');
  });

}).listen (6969, '0.0.0.0');




