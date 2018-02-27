// Uploaded file is save at the oldpath in client server
// Before test, you need too change newpath
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if(req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
      var oldpath = files.filetoupload.path;
      var newpath = '/Users/seonnamkung/Desktop/node.basic/' + files.filetoupload.name;
      fs.rename(oldpath,newpath,function(err){
        if(err) throw err;
        res.write('File uplooaded and movoed!');
        res.end();
      });
    });
  }else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
