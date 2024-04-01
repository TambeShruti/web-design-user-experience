const Job = require("../models/jobSchema");

exports.createJob = async (req, res, next) => {
  try {
    const { companyName, jobTitle, description, salary } = req.body;

    // Create new job
    const newJob = new Job({ companyName, jobTitle, description, salary });
    await newJob.save();

    res.status(201).json(newJob);
  } catch (error) {
    next(error);
  }
};
