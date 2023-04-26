const router = require('express').Router();
const {
  getAllEntries,
  getEntryById,
  addEntry,
  updateEntry,
  removeEntry
} = require('../../controllers/Entry-controller');

// Entries
router.route('/').get(getAllEntries);
router.route('/:EntryId').get(getEntryById);
router.route('/').post(addEntry);
router.route('/:EntryId').put(updateEntry);
router.route('/:EntryId').delete(removeEntry);