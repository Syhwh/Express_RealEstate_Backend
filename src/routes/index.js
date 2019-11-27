const userRouter = require('../routes/user');
const agencyRouter = require('../routes/agency');
const propertyRouter = require('../routes/property');
const cloudinaryRoutes = require('../routes/cloudinaryRoutes');
const search = require('../routes/search');

function router(app) {
  app.use(userRouter);
  app.use(agencyRouter);
  app.use(propertyRouter);
  app.use(cloudinaryRoutes);
  app.use(search);
}
module.exports = router