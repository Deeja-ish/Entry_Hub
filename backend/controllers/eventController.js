const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;

    const event = new Event({
      title,
      description,
      location,
      date
    });

    await event.save();

    res.status(201).json({
      message: "Event created successfully",
      event
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating event",
      error: error.message
    });
  }
};