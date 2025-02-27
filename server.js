const mainApp = require('./mainApp');
const { Port } = require('./config/env');

mainApp.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});