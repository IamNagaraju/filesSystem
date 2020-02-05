var fs = require('fs');

reader = fs.createReadStream('./read.txt');

reader.on('data', function(chunk) {
  let writer = fs.createWriteStream('./write.txt');

  writer.write(chunk.toString());
});
