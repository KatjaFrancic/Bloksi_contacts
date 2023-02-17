const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const User = mongoose.model('User', userSchema);

userSchema.statics.doesUsernameExist = async function (username) {
    
    try {
        const user = await this.findOne({username})

        if (user) 
            return false
        
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }

}

module.exports = User;