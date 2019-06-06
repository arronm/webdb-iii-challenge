const validateId = db => async (req, res, next) => {
  try {
    // TODO: update this so the method can change
    const resource = await db.get(req.params.id);

    if (!resource) return res.status(404).json({
      message: `Could not find a resource with an id of (${req.params.id})`,
    });

    req.resource = resource;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unknown server error',
    });
  }
}

module.exports = validateId;