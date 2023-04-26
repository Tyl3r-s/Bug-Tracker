const { Entry, User } = require('../models');


const entryController = {

  getAllEntries(req, res) {
    Entry.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  getEntryById({ params }, res) {
    Entry.findOne({ _id: params.entryId })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  addEntry({ body }, res) {
    Entry.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { entries: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No entry found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  updateEntry({ params, body}, res) {
    Entry.findByIdAndUpdate(
      { _id: params.entryId },
      body,
      { new: true, runValidators: true }
    )
      .then(updatedEntry => {
        if (!updatedEntry) {
          res.status(404).json({ message: 'No Entry found with this id!' });
          return;
        }
        res.json(updatedEntry);
      })
      .catch(err => res.json(err));
  },

  removeEntry({ params }, res) {
    Entry.findOneAndDelete({ _id: params.entryId })
      .then(deletedEntry => {
        if (!deletedEntry) {
          return res.status(404).json({ message: 'No Entry with this id!' });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { entries: params.entryId } },
          { new: true }
        );
      })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
};


module.exports = entryController;