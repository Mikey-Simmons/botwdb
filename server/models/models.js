
const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true, "You must input a username!"],
        minlength: [3, "User name must be more than 3 Characters"],
        maxlength: [50, "This Username is too long!"]
    },
    image_url:{
        type: String,
        minlength:[5,"Must be a link longer than 5 characters!"]
    },
    text:{
        type: String,
        require:[true,"Text Cannot be blank..."],
    },
    




    

}, { timestamps: true });

module.exports.Discussion = mongoose.model("Discussion", DiscussionSchema);