// TODO: Update this further to have validation options like 'isRequired and type checking
const validateBody = keys => (req, res, next) => {
  let missing = '';
  keys.forEach(key => {
    if (!req.body[key]) {
      missing = key;
    }
  });

  if (missing) return res.status(400).json({
    message: `Missing required field (${missing})`,
  });

  next();
}

module.exports = validateBody;
