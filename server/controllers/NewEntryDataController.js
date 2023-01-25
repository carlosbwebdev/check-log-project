const NewEntryData = require('../schemas/newEntryData');

exports.createNewEntryData = async (req, res) => {
  try {
    const newEntryData = await NewEntryData.create({
      date: req.body.date,
      team: req.body.team,
      todos: req.body.todos,
    });
    res.json({
      status: 'success',
      message: 'New entry data added successfully',
      newEntryData,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.getEntryData = async (req, res) => {
  try {
    const EntryData = await NewEntryData.find();
    res.json({
      status: 'success',
      message: 'New entry data retrieved successfully',
      EntryData,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `Duplicate date: ${req.body.date}`,
    });
  }
};

exports.getEntryDatabyDateAndTeam = async (req, res) => {
  try {
    const EntryData = await NewEntryData.find({
      date: req.params.date,
      team: req.params.team,
    });

    if (EntryData.length === 0) {
      res.json({
        status: 'fail',
        message: `Data not found`,
      });
    } else {
      res.json({
        status: 'success',
        message: 'New entry data retrieved successfully',
        EntryData,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: `Data not found`,
    });
  }
};
