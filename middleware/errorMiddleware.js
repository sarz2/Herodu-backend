//If user goes to link that does not exist
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//Errorhandler for more clear errors
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode;

  if (statusCode === 200) {
    statusCode = 500;
  } else {
    statusCode = statusCode;
  }
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
