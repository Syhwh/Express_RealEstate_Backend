const userRouter = require('../routes/user');
const agencyRouter = require('../routes/agency');
const propertyRouter = require('../routes/property');
const zillowApi = require('../routes/apiRoutes.js');

function router(app) {
  app.use(userRouter);
  app.use(agencyRouter);
  app.use(propertyRouter);
  app.use(zillowApi);
}
module.exports = router