var spawn = require('child_process').spawn

 function runCommand(cmd, args, callback) {
        var child = spawn(cmd, args);
         var resp = '';
        child.stdout.on('data', function (data) { console.log(data) });
       child.stdout.on('end', function () { callback(resp) });
    
}
var path = 'test'
var branch = 'qa'
runCommand('bash', ['./auto_build.sh', path, branch], function (txt) {
             console.log(txt);
    
})