const db = require("./models");

const syncDb = async () => {
  try {
    await db.sequelize.sync();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  syncDb
};

if (require.main === module) syncDb();
