// TODO: Update this further to have validation options like 'isRequired and type checking
const validateBody = keys => (req, res, next) => {
  keys.forEach(key => {
    if (!req.body[key]) return res.status(400).json({
      message: `Missing required field (${key})`,
    });
  });
  next();
}

module.exports = validateBody;
