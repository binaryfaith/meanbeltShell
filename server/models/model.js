var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new mongoose.Schema({
    user: String,
    userinput: String,
    like: [{type: Schema.Types.ObjectId, ref: 'Like'}] 
    }, {timestamps: {created: 'created' }
});

var likeSchema = new mongoose.Schema({
    _like: {type:Schema.Types.ObjectId, ref: 'Data'},
    userinput: String,
    like: Number
});

var Data = mongoose.model('Data', dataSchema);
var Like = mongoose.model('Like', likeSchema);