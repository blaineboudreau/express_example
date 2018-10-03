var express = require('express')
var port = process.env.PORT || 3000;
// var router = express.Router();
var bodyParser = require('body-parser');


var app = express();

router.use(express.static('./express_example' + '/public'));

// handler for route or "root"
app.get('/', function(req, res) {
    res.send({
      name: 'Blaine',
      likes: ['coding', 'pizza', 'mountain_dew', 'WOW']
    })
});

app.get(/)




//3. LISTENER
.listen(port, function() {
    console.log('app is listening');
});
