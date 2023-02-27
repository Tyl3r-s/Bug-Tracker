const { AuthenticationError } = require('apollo-server-express');
const mongoose = require('mongoose');
const { User, Entry } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // this queries me - the logged in user
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select(
            "-__v -password"
          );
          return userData;
        }
        throw new AuthenticationError("Not logged in");
      },
      entries: async (parent, {email}, context) => {
        
        const entries = Entry.find({email});
  
        return entries;
      },
    },
    // mutations start here
    Mutation: {
      // This is the login user mutation with authentication and returns a token and User
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError("Invalid credentials");
        }
  
        const correctPassword = await user.isCorrectPassword(password);
        if (!correctPassword) {
          throw new AuthenticationError("Invalid credentials");
        }
        const token = signToken(user);
  
        return { token, user };
      },
      // this is the addUser muatation that returns a token and a user - used in the signup form
      addUser: async (parent, args) => {
        const user = await User.create(args);
        console.log(user);
        const token = signToken(user);
  
        return { token, user };
      },

    addEntry: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const entry = await Entry.create({...args, email: context.user.email });
        await User.findByIdAndUpdate(
          {
            _id: context.user._id
          },
          {
            $push: { entries: entry._id}
          },
          {
            new: true
          }
        );

        return entry;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    editEntry: async (parent, {_id, ...args}, context) => {
      if (context.user) {
        const entry = await Entry.findByIdAndUpdate( {_id: mongoose.Types.ObjectId(_id)},
          args, {new: true});
        await User.findOneAndUpdate(
          {
            _id: context.user._id
          },
          {
            $push: { entries: entry._id}
          },
          {
            new: true
          }
        );
        return entry;
      } 
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteEntry: async (parent, {_id}, context) => {
      try {
      if (context.user) {
        // for testing
        // const email = "test200@test.com"        
        console.log(_id);
        console.log('anything')
        const response = await Entry.findByIdAndRemove({_id: mongoose.Types.ObjectId(_id)});
        await User.findOneAndUpdate(
          {
            _id: context.user._id
          },
          {
            $pull: { entries: _id}
          },
          {
            new: true
          }
        );
        return _id;

      }
    }catch(e){
      console.log(e)
    }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;