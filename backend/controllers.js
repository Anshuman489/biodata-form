const Biodata = require('./models');

const castNumbers = (body) => ({
  ...body,
  graduationYear: Number(body.graduationYear),
  experienceYears: Number(body.experienceYears),
});

/*   POST /api/userbiodata   */
exports.createBiodata = async (req, res, next) => {
  try {
    const entry = await Biodata.create(castNumbers(req.body));
    res.status(201).json(entry);
  } catch (err) {
    next(err);          // pass to central error-handler
  }
};

/*   GET /api/userbiodata   */
exports.getAllBiodata = async (req, res, next) => {
  try {
    const entries = await Biodata.find();
    res.json(entries);
  } catch (err) {
    next(err);
  }
};

/*   GET /api/userbiodata/:id   */
exports.getOneBiodata = async (req, res, next) => {
  try {
    const entry = await Biodata.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json(entry);
  } catch (err) {
    next(err);
  }
};