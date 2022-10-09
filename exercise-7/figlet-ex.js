const figlet = require('figlet');

figlet.text('GO TO CHURCH !', function(err, data) {
    if(err){
        console.log('Error:', err);
    }
    console.log(data);
})