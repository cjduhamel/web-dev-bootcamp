var mongoose = require("mongoose")
require('dotenv').config();
mongoose.set('debug', true);
mongoose.connect('mongodb://RealityKIKSIn:waves247@ds125881.mlab.com:25881/ad-web-dev-camp', { useNewUrlParser: true }) 

mongoose.Promise = Promise;


module.exports.Todo = require("./todo");  
