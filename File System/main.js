var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  fs.readFile('demo1.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);


// Append data at the last
// if the file does not exist, the file will be created.
fs.appendFile('newfile1.txt','data',function(err){
  if(err) throw err;
  console.log('Appended');
});

// Open file
// if the file does not exist, the file will be created.
fs.open('newfile2.txt','w',function(err,file){
  if(err) throw err;
  console.log('Opend');
})

// Init past datas and write newly.
// if the file does not exist, the file will be created.
fs.writeFile('newfile3.txt','data',function(err){
  if(err) throw err;
  console.log('Writed');
});

// Delete readFile
fs.unlink('newfile2.txt',function(err){
  if(err) throw err;
  console.log('File deleted!');
});

// Rename File
fs.rename('newfile1.txt','renamedfile.txt',function(err){
  if(err) throw err;
  console.log('File renamed!');
});
