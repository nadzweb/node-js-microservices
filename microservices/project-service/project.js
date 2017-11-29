var net = require('net');
var jSocket = require('json-socket');

// create a server
var server = net.createServer();
server.listen(9002);
server.on('connection', function(socket) { //This is a standard net.Socket
    socket = new jSocket(socket);
    socket.on('message', function(message) {
        var result = null;
        switch(message) {
            case 'projects':
                var projectsFromDataSource = require('./data-source');
                result = JSON.parse(projectsFromDataSource);
                break;
            default:
                result = 'no projects';
        }
        console.log('results from service', projectsFromDataSource);
        socket.sendMessageEnd({result: result});
    });
});
