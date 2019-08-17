// server.js

// BASE SETUP
// ===================================================

// call the packages we nedd
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// ROUTER FOR OUT API
// ===================================================
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); //make sure we go to the next routes and don`t stop here
})

var Member = require('./models/member')
//test route to make sure everything is working(accessd at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'nice，服务器来了!' });
})

// more routes for our API will happen here
router.route('/members')
    .post(function(req, res) {
        var member = new Member();
        member.name = req.body.name;
        member.save(function(err) {
            if (err)
                res.sned(err);
            res.json({ message: 'Member created!' });
        });
    })
    .get(function(req, res) {
          Member.find(function(err, members) {
              if (err)
                  res.send(err);
              res.json(members);
          });
    });

router.route('/members/:member_id')
    .get(function(req, res) {
          Member.findById(req.params.member_id, function(err, member) {
                if (err)
                    res.send(err);
                res.json(member);
          })
    })
    .put(function(req, res) {
          Member.findById(req.params.member_id, function(err, member) {
                if (err)
                    res.send(err)
                member.name = req.body.name;
                member.save(function(err) {
                      if (err)
                          res.send(err);
                      res.json({ message: 'Member updated!'})
                })
          });
    })
    .delete(function(req, res) {
          Member.remove({
              _id: req.params.member_id
          }, function(err, member) {
              if (err)
                  res.send(err)
              res.json({ message: 'Successfully deleted! '});
          })
    });




// REGISTER OUR ROUTES ----------------------
// all of our routes will be prefixed with /api
app.use('/api', router)

// START THE SERVER
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bear', function (err) {
    if (err) {
        console.log(err, "数据库连接失败");
        return;
    }
    console.log('数据库连接成功');

    app.listen(port, function (err) {
        if (err) {
            console.error('err:', err);
        } else {
            console.info(`===> api server is running at localhost:27017`)
        }
    });
});

