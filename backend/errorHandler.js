module.exports = (err, req, res, _next) => {
  // duplicate-key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      type: 'DUPLICATE',
      message: `The ${field} "${err.keyValue[field]}" is already in use.`,
      field,
    });
  }

  // validation / cast
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return res.status(400).json({ type: 'VALIDATION', message: err.message });
  }

  // fallback 500
  console.error('💥 Unexpected:', err);
  res.status(500).json({ type: 'SERVER', message: 'Internal server error' });
};
