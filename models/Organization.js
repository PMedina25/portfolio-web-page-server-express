const mongoose = require('mongoose');


/**
 * Organization mongoose schema
 */
const OrganizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a organization name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    type: {
        type: String,
        required: [true, 'Please add a type'],
        enum: [
            'Education',
            'Experience',
            'Certification'
        ]
    },
    url: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    image: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: String /* String because it has to accept 'Current' value */
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Organization', OrganizationSchema);