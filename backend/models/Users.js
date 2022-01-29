import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const UsersSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    studyLevel: {
        type: String,
        required: true,
        default: "College"
    },
    major: {
        type: String,
        required: true,
        default: "CSE"
    },
    institution: {
        type: String,
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: "Looking for Team"
    },
    skills: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    primaryContact: {
        type: String,
        required: true
    },
    github: {
        type: String,
    },
    twitter: {
        type: String
    }

    
  });
  
const Users = mongoose.model('users', UsersSchema);
  module.exports = Users;