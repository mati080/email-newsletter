const connect  = require('connect');
const compiler = require('connect-compiler');
const static = require('serve-static');

const server = connect();

server.use(
    compiler({
        enabled : [ 'coffee', 'uglify' ],
        src     : 'src',
        dest    : 'public'
    })
);

server.use(  static(__dirname + '/public'));

server.listen(3000);

const livereload = require('livereload');
const lrserver = livereload.createServer();
lrserver.watch(__dirname + "/public");