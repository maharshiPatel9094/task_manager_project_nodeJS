const routeNotAvailable = (req, res) => {
  res.status(404).json({
    message: "Route not available",
  });
};


module.exports = routeNotAvailable